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
 
 <table>
    <thead>
        <tr>
            <th>NAME</th>
            <th>MATERIAL</th>
            <th>SIZE(PERIMETER*WIDTH*THICKNESS)</th>
            <th>POUND</th>
            <th>COLOR</th>
            <th>N.W.</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="10">RESISTANCE BANDS</td>
            <td rowspan="10">Natural Latex</td>
            <td>2080*4.5*6.4mm</td>
            <td>8-15LB</td>
            <td>yellow</td>
            <td>60g</td>
        </tr>
        <tr>
            <td>2080*4.5*13mm</td>
            <td>15-35LB</td>
            <td>red,pink,green</td>
            <td>110g</td>
        </tr>
        <tr>
            <td>2080*4.5*19mm</td>
            <td>20-60LB</td>
            <td>green</td>
            <td>148g</td>
        </tr>
        <tr>
            <td>2080*4.5*22mm</td>
            <td>25-65LB</td>
            <td>black,pink,green</td>
            <td>165g</td>
        </tr>
        <tr>
            <td>2080*4.5*29mm</td>
            <td>30-80LB</td>
            <td>red</td>
            <td>242g</td>
        </tr>
        <tr>
            <td>2080*4.5*32mm</td>
            <td>35-85LB</td>
            <td>purple</td>
            <td>260g</td>
        </tr>
        <tr>
            <td>2080*4.5*45mm</td>
            <td>50-125LB</td>
            <td>green</td>
            <td>375g</td>
        </tr>
         <tr>
            <td>2080*4.5*64mm</td>
            <td>65-175LB</td>
            <td>blue</td>
            <td>538</td>
        </tr>
        <tr>
            <td>2080*4.5*83mm</td>
            <td>80-230LB</td>
            <td>orange</td>
            <td>760g</td>
        </tr>
        <tr>
            <td>2080*4.5*102mm</td>
            <td>100-250LB</td>
            <td>gray</td>
            <td>880g</td>
        </tr>
    </tbody>
 </table>
 
<table>
    <thead>
        <tr>
            <th>NAME</th>
            <th>DIAMETER</th>
            <th>LENGTH</th>
            <th>WEIGHT</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="6">UFC battle rope</td>
            <td rowspan="3">38MM</td>
            <td>9M</td>
            <td>7.7KG</td>
        </tr>
        <tr>
            <td>12M</td>
            <td>10KG</td>
        </tr>
        <tr>
            <td>15M</td>
            <td>12.6</td>
        </tr>
        <tr>
            <td rowspan="3">50MM</td>
            <td>9M</td>
            <td>13.5KG</td>
        </tr>
        <tr>
            <td>9M</td>
            <td>18KG</td>
        </tr>
        <tr>
            <td>9M</td>
            <td>22.5KG</td>
        </tr>
    </tbody>
 </table>
 
  <table>
    <thead>
        <tr>
            <th>WEIGHT</th>
            <th>G.W.</th>
            <th>DIAMETER</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>860G</td>
            <td>0.9KG</td>
            <td>42CM</td>
        </tr>
        <tr>
            <td>1000G</td>
            <td>1.15KG</td>
            <td>50CM</td>
        </tr>
        <tr>
            <td>1200G</td>
            <td>1.25KG</td>
            <td>50CM</td>
        </tr>
        <tr>
            <td>1300G</td>
            <td>1.45KG</td>
            <td>52.5CM</td>
        </tr>
        <tr>
            <td>1500G</td>
            <td>1.55KG</td>
            <td>55CM</td>
        </tr>
    </tbody>
 </table>
