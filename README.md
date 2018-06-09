# Yellow Page Scraper
### About
Scrap Yellow Pages for name,email,address,phone number ... and store the information into CSV file.

[Demo (Basketball in CA)](./results/ca.csv)

### Run
spiders->yellowpagespider.py

```python
area = "ca"
key_word = "basketball"
```

command line
```shell
scrapy crawl yellowpage -a area=FL key_word=Zara
```

fetch the whole the united states
```bash
chmod +x run.sh
./run.sh
```
