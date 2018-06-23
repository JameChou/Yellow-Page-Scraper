import scrapy
import csv
from yellowpages.ptagitem import PtagItem
from scrapy_splash import SplashRequest

class BodySolidSpider(scrapy.Spider):
    name = "ptag"
    allowed_domains = ["playitagainsports.com"]
    base_url = "https://www.playitagainsports.com"
    area = None
    url_suffix = "/"
    start_urls = [
        base_url
    ]
    init_url = None
    csvfile = None
    writer = None

    def __init__(self, area=None, *args, **kwargs):
        super(BodySolidSpider, self).__init__(*args, **kwargs)
        if area is not None:
            self.area = area
        else:
            self.area = "CA"
        self.init_url = self.base_url + self.url_suffix + "Locations/List" + self.url_suffix + self.area
        self.csvfile = file('results/playitagainsports/' + self.area + '.csv', 'wb')
        self.writer = csv.writer(self.csvfile)

    def parse(self, response):
        #yield scrapy.Request(self.init_url, self.parse_list_page)
        yield SplashRequest(
            self.init_url,
            self.parse_list_page,
            endpoint='render.json',
            args={
                'har': 1,
                'html': 1,
            }
        )

    def parse_list_page(self, response):
        infoModal = response.xpath('//div[@class="locationModal"]')
        for i in infoModal:
            address = i.xpath('.//address/text()').extract_first().strip()
            phone = i.xpath('.//p[@class="phone"]//text()').extract_first().strip()
            emailSelector = i.xpath('.//a[@itemprop="email"]/@href').extract_first()
            email = None
            if emailSelector is not None:
                email = emailSelector[7:]
            self.writer.writerow([address, phone, email])
