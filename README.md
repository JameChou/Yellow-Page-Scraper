# Yellow Page Email Scraper
### About
Scrap Yellow Pages for name,email,address,phone number ... and store the information into JSON/CSV file.
[See example JSON file](./example.json)
[See example CSV file](./example.csv)

### Install
```bash
npm install
```
### Customize
Update the host{} in scraper.js -
```js
var host = {
    // main connect
    url: 'http://yellowpages.com',
    // areas to search
    area: [
        '/michigan',
        '/california',
        '/washington',
        '/florida',
    ],
    // business keyword
    keyword: '/restaurant',
    // creates complete link
    search: function () {
        return host.url + host.area[build.currentLocation] + host.keyword;
    }
};
```

### Run
#### Basic

```bash
npm run fetch-data
```

#### Fetch Data By HTTP/SOCKS5 Proxy
modify `./package.json`

* web proxy
```json
"fetch-data-proxy": "casperjs --proxy=ip:socket scraper.js"
```
* socks5 proxy
```json
"fetch-data-proxy": "casperjs --proxy=ip:socket --proxy-type=socks5 scraper.js"
```

then run by script
```bash
npm run fetch-data-proxy
```

### Convert JSON Format Data to CSV Format Data
```bash
npm run json2csv
```
