var eddystoneBeacon = require('eddystone-beacon');


var id = process.argv[2] || 0;
var name = process.argv[3] || 'Anonymous Name';

var options = {
  name: name,    // set device name when advertising (Linux only)
  txPowerLevel: -100, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

var url = 'http://' + id;

console.log('Advertising on url: ' + url + ' with name: ' + name)

eddystoneBeacon.advertiseUrl(url, [options]);
