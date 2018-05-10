var XLSX = require('xlsx');
var fs = require('fs');

function processData() {

  fs.readFile('example.json', 'utf-8', function (err, data) {
    if (err) console.log(err);

    /*
    fs.readFile('capture.js', 'utf-8', function (error, jsData) {
      jsData = jsData.replace('-replace-', data);
      console.log(jsData);
      console.log(data);
      fs.writeFile('capture.js', jsData, function (e, d) {
      });
    });
    */
    var aoo = JSON.parse(data);
    var ws = XLSX.utils.json_to_sheet(aoo);
    var stream = XLSX.stream.to_csv(ws);
    stream.pipe(fs.createWriteStream("example.csv"));
  });

}

processData();
