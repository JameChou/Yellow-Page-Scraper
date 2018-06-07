# Yellow Page Scraper
### About
Scrap Yellow Pages for name,email,address,phone number ... and store the information into CSV file.

[Demo (Basketball in CA)](./ca.csv)

### Customize
spiders->yellowpagespider.py

```python
area = "ca"
key_word = "basketball"
```

### Run
```bash
scrapy crawl yellowpage
```
