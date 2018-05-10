var casper = require('casper').create();
var fs = require('fs');

/*
var aoo = [
  {
    "address": "2124 Franklin Rd, Bloomfield Twp, MI 48304",
    "email": "bloomgyms@aol.com",
    "name": "Bloomfield Gymnastics",
    "phone": "(248) 494-4060",
    "website": "http://www.bloomfieldgymnastics.com"
  },
  {
    "address": "3972 Miramar Ave NE, Grand Rapids, MI 49525",
    "name": "American Furniture Contractor",
    "phone": "(616) 363-0655",
    "website": "http://afcinc.us"
  },
  {
    "address": "",
    "email": "FitFix@rocketmail.com",
    "name": "Fit FIx",
    "phone": "(248) 345-2262"
  },
  {
    "address": "4567 Washtenaw Ave, Ann Arbor, MI 48108",
    "name": "Snap Fitness - Fitness Club",
    "phone": "(734) 973-6900"
  },
  {
    "address": "6858 Gilman St, Garden City, MI 48135",
    "email": "lolliorobyn@yahoo.com",
    "name": "Home",
    "phone": "(313) 377-6712"
  },
  {
    "address": "6750 Orchard Lake Rd, West Bloomfield, MI 48322",
    "name": "Get Downsized",
    "phone": "(248) 798-4400"
  },
  {
    "address": "4690 Randolph Hwy, Adrian, MI 49221",
    "email": "dynamicfitness1@live.com",
    "name": "Dynamic Gym Outfitters",
    "phone": "(517) 902-6701",
    "website": "http://www.dynamiccluboutfitters.com"
  },
  {
    "address": "1305 S Cedar St Ste 407, Lansing, MI 48910",
    "email": "sales@nimblesports.com",
    "name": "Nimble Sports",
    "phone": "(517) 316-3749",
    "website": "http://www.nimblesports.com"
  },
  {
    "address": "9410 Davis Hwy, Dimondale, MI 48821",
    "name": "Twistars USA Gymnastics Booster Club",
    "phone": "(517) 322-0882"
  },
  {
    "address": "41620 6 Mile Rd, Northville, MI 48168",
    "name": "Super Slow Zone",
    "phone": "(248) 880-4576",
    "website": "http://www.superslow-northville.com"
  },
  {
    "address": "5920 Enterprise Dr, Lansing, MI 48911",
    "name": "The Yoke Strength Machine",
    "phone": "(517) 599-0613",
    "website": "http://probodyequipment.com"
  },
  {
    "address": "26110 Crocker Blvd, Harrison Township, MI 48045",
    "email": "harrisontwp@snapfitness.com",
    "name": "Snap Fitness - Fitness Club",
    "phone": "(586) 463-2233",
    "website": "http://www.snapfitness.com/harrisontwp"
  }
];

function run() {
  if (aoo.length == 0) {
    return;
  }
  var start = 0;
  for (start = 0; start<aoo.length; start++) {
    if (aoo[start].website == null || aoo[start].website.length == 0) {
      continue;
    } else {
      break;
    }
  }


  casper.start(aoo[start].website, function () {
    var path = "./capture/" + aoo[start].name + ".png";
    this.capture(path,{
            top: 00,
            left: 0,
            width: 1920,
            height: 768
    });
    for (var i=start+1; i<aoo.length; i++) {
      console.log(i);
      console.log(aoo[i]);
      if (aoo[i].website == null || aoo[i].website.length == 0) continue;
      var c_path = "./capture/" + aoo[i].name + ".png";
      casper.thenOpen(aoo[i].website, function () {
        this.capture(c_path, {
                top: 00,
                left: 0,
                width: 1920,
                height: 768
        });
      });
    }

  });
}

run();

casper.run(function () {
    this.exit();
});
*/
