module.exports = function(debug) {

var mongoURI = process.env.MONGOHQ_URL

if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
	var mongoURI = 'mongodb://localhost/the_graduate';
} 

var mongoose = require('mongoose')
    , extend = require('mongoose-schema-extend')
    , fs = require('fs')
    , path = require("path")
    , async = require('async')
    , url = require("url")
    , pascalCase = require('pascal-case')
    , _ = require("underscore")

	db = mongoose.createConnection(mongoURI);

	mongoose.set('debug', debug || false)

	db.on('error', function(err) {
		console.log(err.stack)
		throw err
	})

	var Schema = mongoose.Schema;

	var schemas = {} // the list of mongoose schemas
	var model_directory = path.join(__dirname, 'mongoose')
	// automatically get all files in directory
	var files = fs.readdirSync(model_directory)

	files.forEach(function(file) {

		var models = require(path.join(model_directory, file))(Schema, extend)

		_(models).each(function(schema, model_name) {
			schemas[pascalCase(model_name)] = db.model(model_name, schema)
		})
	})
	
	return schemas

}
