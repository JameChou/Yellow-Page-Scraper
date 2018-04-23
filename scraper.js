var casper = require('casper').create();
var fs = require('fs');

// build variables
var build = {
    currentPage: 1,
    currentLocation: 0,
    links: [],
    proceed: true,
    aoo: [],
    cardInfo: null
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
      var query = document.querySelectorAll('div.info h2.n a.business-name');
       return Array.prototype.map.call(query, function (e) {
           return e.getAttribute('href');
       });
    },
    processData: function () {
      var cardInfo = {};
      // email
      var emailDom = document.getElementsByClassName('email-business');
      if (emailDom != null && emailDom != undefined && emailDom.length > 0) {
        cardInfo.email = emailDom[0].getAttribute('href').slice(7);
      }

      // name
      var nameDom = document.querySelectorAll('div.sales-info h1')[0];
      cardInfo.name = nameDom.innerText;

      // address
      var addressDoms = document.querySelectorAll('div.contact p.address span');
      var address = '';
      for (var i=0; i<addressDoms.length; i++) {
        address += addressDoms[i].innerText;
      }
      address = address.replace('&nbsp;', ' ');
      cardInfo.address = address;

      // official website
      var websiteDom = document.querySelectorAll('a.other-links');
      if (websiteDom != null && websiteDom != undefined && websiteDom.length > 0) {
        cardInfo.website = websiteDom[0].getAttribute('href');
      }

      // phone
      var phoneDom = document.querySelectorAll('div.contact p.phone');
      if (phoneDom != null && phoneDom != undefined && phoneDom.length > 0) {
        cardInfo.phone = phoneDom[0].innerText;
      }

      return cardInfo;
    }
};

// main scraper
function scrape(page) {
    casper.start(page, function () {
        this.echo('\nSCAPING: ' + page);

        build.links = this.evaluate(get.links);
          // loop over all those links
          for (var i in build.links) {
              casper.thenOpen(host.url + build.links[i], function () {
                  build.cardInfo = this.evaluate(get.processData);
                  if (build.cardInfo != null) {
                    console.log('\nProcess ------>\n');
                    console.log(JSON.stringify(build.cardInfo, null, 2));
                    build.aoo.push(build.cardInfo);
                  }
              });
          }

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
