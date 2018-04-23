var casper = require('casper').create();
var fs = require('fs');

// build variables
var build = {
    currentPage: 1,
    currentLocation: 0,
    proceed: true,
    aoo: []
};

// areas and keyword
var host = {
    url: 'http://yellowpages.com',
    // areas to search
    area: [
        '/michigan'
    ],
    // business keyword
    keyword: '/dumbbell',

    search: function () {
        return host.url + host.area[build.currentLocation] + host.keyword;
    }
};

// data methods
var get = {
    links: function () {
      console.log(123);
    },
    processData: function () {
      console.log('haha');
      var data = {};
      var cards = document.getElementsByClassName('v-card');
      for (var card in cards) {
        // get name
        var name = card.querySelectorAll('[itemprop="name"]');
        if (name == null || name == undefined || name.trim() == '') continue;
        data.name = name;

        // get official website if exists
        var websites = card.getElementsByClassName("track-visit-webiste");
        if (websites == null || websites == undefined || websites.length == 0) data.website = '';
        else data.website = websites[0].getAttribute('href');

        // get address
        var addresses = card.querySelectorAll('p.adr span');
        var address = '';
        for (var a in addresses) address += a.text();
        address = address.replaceAll('&nbsp;', ' ');
        data.address = address;
      }

      return data;
    }
};

// main scraper
function scrape(page) {
    casper.start(page, function () {
        this.echo('\nSCAPING: ' + page);

        // opens main page again
        casper.thenOpen(page, function () {
            if (this.exists('a.next')) {
                this.echo('\nCONTINUE: Next button found');
                build.currentPage = build.currentPage + 1;
                scrape(host.search() + '?page=' + build.currentPage);
            } else {
                this.echo('COMPLETE: Area complete, no next button');
                if (host.area.length > 1 && build.currentLocation <= host.area.length) {
                    this.echo('LOADING: Moving onto next location');
                    build.currentLocation = build.currentLocation + 1;
                    scrape(host.search());
                } else {
                    // complete and write data to json file
                    this.echo('COMPLETE: All areas completed');
                    fs.write('example.json', JSON.stringify(build.aoo, null, 2), 'w');
                    this.exit();
                }

            }
        });
    });
}

// init run
scrape(host.search());

// final exit
casper.run(function () {
    this.exit();
});
