# zconf [![Build Status](https://travis-ci.org/zther/zconf.png?branch=master)](https://travis-ci.org/zther/zconf)

A useful json based config modules, based on nconf.

## Getting Started
Install the module with: `npm install zconf`

## Documentation
_(Coming soon)_

## Examples
 
	//add a stores
 	zconf.add('store1', './store1.json');
 	zconf.add('store2', './store2.json');
 
 	//set sets key value for 'store2'
 	zconf.set('key', 'value');
 
 	//get get key value for 'store2'
	zconf.get('key');
	
	//switch stores
	zconf.use('store1');
	
	//or just do this..
	zconfig.use('store2').get('key');
	
	//remove a store
	zconf.remove('store1');

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Joel Caballero. Licensed under the MIT license.
