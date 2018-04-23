# Yellow Page Email Scraper
### About
Scrap Yellow Pages for emails and return them in a list -
![Screen shot](http://i.imgur.com/h1yCp0p.png)

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

### Convert JSON Data to Excel(XLSX)
```bash
npm run json2xlsx
```
