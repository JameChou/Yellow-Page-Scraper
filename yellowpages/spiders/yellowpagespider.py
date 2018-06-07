import scrapy
from yellowpages.items import YellowpagesItem
import csv


class YellowPageSpider(scrapy.Spider):
    name = "yellowpage"
    allowed_domains = ["yellowpages.com"]
    base_url = "https://www.yellowpages.com"
    area = "ca"
    key_word = "basketball"
    url_suffix = "/"
    init_url = base_url + url_suffix + area + url_suffix + key_word
    start_urls = [
        init_url
    ]
    current_page = 1
    csvfile = file(area + '.csv', 'wb')
    writer = csv.writer(csvfile)

    def parse(self, response):
        yield scrapy.Request(self.init_url + '?page=' + str(self.current_page), self.parse_list_page)

    def parse_list_page(self, response):
        data = response.xpath('//a[@class="next ajax-page"]')
        if len(data) > 0:
            self.current_page = self.current_page + 1
            yield scrapy.Request(self.init_url + '?page=' + str(self.current_page), self.parse_list_page)
        links = []
        for link in response.xpath('//a[@class="business-name"]/@href'):
            links.append(link.extract())
        for inner_page_url in links:
            if str(inner_page_url).startswith("http"):
                continue
            yield scrapy.Request(self.base_url + inner_page_url, self.parse_inner_page)

    def parse_inner_page(self, response):
        item = YellowpagesItem()
        item['name'] = response.xpath('//div[@class="sales-info"]/h1/text()').extract_first().encode('utf-8')
        address = ""
        count = 1
        for a in response.xpath('//p[@class="address"]/span/text()'):
            if count == 1:
                address = a.extract()
            else:
                address = address + " " + a.extract()
            count = count + 1
        item['address'] = address
        item['phone'] = response.xpath('//p[@class="phone"]/text()').extract_first()
        websiteBtn = response.xpath('//a[@class="secondary-btn website-link"]/@href')
        if len(websiteBtn) > 0:
            item["link"] = websiteBtn.extract_first()
        else:
            item["link"] = "none"
        emailBtn = response.xpath('//a[@class="email-business"]/@href')
        if len(emailBtn) > 0:
            item["email"] = emailBtn.extract_first()[7:]
        else:
            item["email"] = "none"

        self.writer.writerow([item["name"], item["address"], item["phone"], item["link"], item["email"]])
