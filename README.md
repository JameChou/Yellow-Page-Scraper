# Yellow Page Scraper
### About
Scrap Yellow Pages for name,email,address,phone number ... and store the information into CSV file.

[Demo (Basketball in CA)](./results/yellowpages/ca.csv)

### Install
1. Install python3 environment. `brew insall python3 pip` - OSX
2. Install scrapy & scrapy-splash. `pip install scrapy scrapy-splash`

### Run
spiders:
* yellowpages.com -> ./yellowpages/spiders/yellowpagespider.py
* playitagainsports.com -> ./yellowpages/spiders/ptagspider.py

```python
area = "ca"
key_word = "basketball"
```

command line

#### Yellowpages
```shell
scrapy crawl yellowpage -a area=FL key_word=Zara
```

#### Play it again sports
```bash
scrapy crawl ptag -a area=FL
```

#### Shell
fetch the whole the united states
```bash
chmod +x run.sh
./run.sh
```
