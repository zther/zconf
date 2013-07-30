'use strict';

var zconf = require('../lib/zconf.js');
var fs = require('fs');
var wrench = require('wrench');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['zconf'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'add store': function(test) {
    test.expect(3);
    test.equal(zconf.add('store1', './var/www/config1.json').store.name, 'store1', 'should be store1');
    test.equal(fs.existsSync('./var/www/config1.json'), true, 'should be true');
    test.equal(zconf.use('store1').store.name, 'store1', 'should be store1');
    test.done();
  },
  'set value': function(test) {
    test.expect(3);
    test.equal(zconf.use('store1').set('key','value'), true, 'should be true');
    test.equal(zconf.use('store1').get('key'), 'value', 'should be value');
    test.equal(zconf.get('key'), 'value', 'should be value');
    test.done();
  },
  'new store': function(test) {
    test.expect(3);
    test.equal(zconf.add('store2', './config2.json').set('key2', 'value2'), true, 'should be true');
    test.equal(zconf.use('store2').get('key2'), 'value2', 'should be value2'); 
    test.equal(zconf.use('store1').get('key'), 'value', 'should be value');
    test.done();
  },
  'remove store': function(test) {
    test.expect(3);
    test.equal(zconf.remove('store1'), true, 'should be true');
    test.equal(zconf.remove('store2'), true, 'should be true');
    test.equal(fs.existsSync('./config2.json'), false, 'should be false');

    //clean up store1
    wrench.rmdirSyncRecursive("./var");

    test.done();
  }
};
