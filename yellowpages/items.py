# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class YellowpagesItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    email = scrapy.Field()
    name = scrapy.Field()
    phone = scrapy.Field()
    address = scrapy.Field()
    link = scrapy.Field()
    pass
