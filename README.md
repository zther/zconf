# zconf [![Build Status](https://travis-ci.org/zther/zconf.png?branch=master)](https://travis-ci.org/zther/zconf)

A useful json based config modules, based on nconf.

## Getting Started
Install the module with: `npm install zconf`

## Documentation
Library create a config file of it's own in the `__dir` path.  It's titled config.json.  Will probably change it to ._config.json in the future.

### zconf.add(name, path)
Adds a new store with the specified `name` and `path`.

	zconf.add('local', '/path/to/localconf.json');
  	zconf.add('global', '/path/to/globalconf.json');

### zconf.use(name)
Switches stores

	zconf.use('local');
	
### zconf.set(key,value)
Sets your key value.

	zconf.set('key', 'value');
	
	//'add' and 'use' return itself so...
	zconf.use('local').set('key', 'value');
	

### zconf.get(key)
Sets your key value

	zconf.get('key');
	
	//'add' and 'use' return itself so...
	zconf.use('local').get('key');

### nconf.remove(name)
Removes the store with the specified `name.` The configuration stored at that level will no longer be used for lookup(s).

	zconf.remove('name');


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
