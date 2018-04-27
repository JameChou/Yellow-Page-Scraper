var fs = require('fs');

var config = {};

config.getAreaList = function (callback) {
  fs.readFile('../cities/us.txt', 'utf-8', function (err, data) {
    if (err) { console.log(err); callback(null) };

    data = data.trim();
    let cities = data.split('\n');

    let callbackDatas = [];
    for (let i=0; i<cities.length; i++) {
      let a = {};
      let c = cities[i];

      let cityName = c.split(',')[0];
      let stateName = c.split(',')[1];

      a.cityName = cityName;
      a.stateName = stateName;

      callbackDatas.push(a);
    }

    callback(callbackDatas);
  });
};

/*
config.getAreaList(function (data) {
  console.log(data);
});
*/

module.export = config;
