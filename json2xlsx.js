var XLSX = require('xlsx');
var fs = require('fs');

function processData() {

  fs.readFile('data.json', 'utf-8', function (err, data) {
    if (err) console.log(err);

    var aoo = JSON.parse(data);
    var ws = XLSX.utils.json_to_sheet(aoo);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    XLSX.writeFile(wb, "data.xlsx");
  });

}

processData();
