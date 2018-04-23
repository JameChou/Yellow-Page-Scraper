var casper = require('casper').create();
var fs = require('fs');

// build variables
var build = {
    emails: [],
    currentPage: 1,
    currentLocation: 0,
    proceed: true,
    links: [],
    email: undefined,
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
    // gets links to page of businesses
    links: function () {
        // search for business links
        var query = document.querySelectorAll('div.info h2.n a.business-name');
        return Array.prototype.map.call(query, function (e) {
            return e.getAttribute('href');
        });
    },
    // gets emails from a current page
    email: function () {
        // select email element
        var results = document.getElementsByClassName('email-business')[0];
        results = results.getAttribute('href');
        results = results.slice(7);

        return results;
    }
};

// main scraper
function scrape(page) {
    casper.start(page, function () {
        this.echo('\nSCAPING: ' + page);
        build.links = this.evaluate(get.links);
        for (var i in build.links) {
            casper.thenOpen(host.url + build.links[i], function () {
                build.email = this.evaluate(get.email);
                if (build.email !== null) {
                    var title = this.getTitle();
                    var address = title.substr(0, title.length - 9);
                    this.echo('\nBUSINESS: ' + address);
                    this.echo('EMAIL: ' + build.email);
                    build.aoo.push({address: address, email: build.email});
                    build.emails.push(build.email);
                }
            });
        }
        // opens main page again
        casper.thenOpen(page, function () {
            this.echo('\nSCAPED: ' + build.emails.length);
            this.echo('DUMP: ' + build.emails.join(', '));
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
                    fs.write('example.json', JSON.stringify(build.aoo), 'w');
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
    this.echo('\nSCAPED: ' + build.emails.length);
    this.echo('DUMP: ' + build.emails.join(', ')).exit();
    this.exit();
});
