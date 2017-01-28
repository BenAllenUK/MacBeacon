var eddystoneBeacon = require('eddystone-beacon');
var options = {
  name: 'Beacon',    // set device name when advertising (Linux only)
  txPowerLevel: -100, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

var id = process.argv[2] || 0;

console.log('Advertising on namespace ID: ' + id + ' on instance: ' + id)
var namespaceId = '00010203040506070809';
var instanceId = 'aabbccddeeff';

eddystoneBeacon.advertiseUid(namespaceId, instanceId, [options]);

// var url = 'jeeves://' + id;
// eddystoneBeacon.advertiseUrl('jeeves://' + id, [options]);
