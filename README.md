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

<table>
    <thead>
        <tr>
            <th>NAME</th>
            <th>MATERIAL</th>
            <th>LEVEL</th>
            <th>SIZE(PERIMETER*WIDTH*THICKNESS)</th>
            <th>POUND</th>
            <th>COLOR</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="10">RESISTANCE BANDS</td>
            <td rowspan="10">Natural Latex</td>
            <td rowspan="5">Regular</td>
            <td>500mm*50mm*0.5mm</td>
            <td>10-15LB</td>
            <td>yellow</td>
        </tr>
        <tr>
            <td>500mm*50mm*0.7mm</td>
            <td>20-35LB</td>
            <td>red</td>
        </tr>
        <tr>
            <td>500mm*50mm*0.9mm</td>
            <td>30-45LB</td>
            <td>blue</td>
        </tr>
        <tr>
            <td>500mm*50mm*1.0mm</td>
            <td>40-60LB</td>
            <td>green</td>
        </tr>
        <tr>
            <td>500mm*50mm*1.2mm</td>
            <td>50-70LB</td>
            <td>black</td>
        </tr>
        <tr>
            <td rowspan="5">Long</td>
            <td>600mm*50mm*0.5mm</td>
            <td>10-15LB</td>
            <td>yellow</td>
        </tr>
        <tr>
            <td>600mm*50mm*0.7mm</td>
            <td>20-35LB</td>
            <td>red</td>
        </tr>
         <tr>
            <td>600mm*50mm*0.9mm</td>
            <td>30-45LB</td>
            <td>blue</td>
        </tr>
        <tr>
            <td>600mm*50mm*1.0mm</td>
            <td>40-60LB</td>
            <td>green</td>
        </tr>
        <tr>
            <td>600mm*50mm*1.2mm</td>
            <td>50-70LB</td>
            <td>black</td>
        </tr>
    </tbody>
 </table>
