/*
 * zconf
 * https://github.com//zconf
 *
 * Copyright (c) 2013 Joel Caballero
 * Licensed under the MIT license.
 */
'use strict';

var fs = require('fs'),
	wrench = require('wrench'),
	p = require('path');

exports.global = {path:"./config.json",stores:{}};
exports.store = {name:"",data:{}};

exports.add = function(name, path){

	//load global data store
	this.global.stores = this._load(this.global.path);
	//add to global
	this.global.stores[name] = path;
	//save stores to global path
	this._save(this.global.stores, this.global.path);
	//save dummy data if it doesn't exist.
	if(!fs.existsSync(p.dirname(p.resolve(path)))){
		wrench.mkdirSyncRecursive(p.dirname(p.resolve(path)));
		this._save({}, path);
	}

	this.use(name);

	return this;
}

exports.use = function(name){
	
	//change store data;
	this.store.data = this._load(this.global.stores[name]);
	//update current store;
	this.store.name = name;

	return this;
}

exports.set = function(key, value) {
	
	this.store.data[key] = value;

	return this._save(this.store.data, this.global.stores[this.store.name]);
}

exports.get = function(key) {
	
	return this.store.data[key];
}

exports.remove = function(name) {

	fs.unlinkSync(this.global.stores[name]);

	delete this.global.stores[name];

	this._save(this.global.stores, this.global.path);

	return true;
}

exports._save = function(data, path) {

	var json = JSON.stringify(data);
	fs.writeFileSync(path, json);

	return true;
}

exports._load = function(path) {

	if(fs.existsSync(path)) {
		return JSON.parse(fs.readFileSync(path));ß
	} else {
		return {};
	}
	
}