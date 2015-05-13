var program = require('commander')
,   fs = require('fs')
,   fw = require('node-file-walker')
,   mongoose = require('mongoose')
,   mongodb = require('mongodb')
,   colors = require('colors')
,   path = require('path')
,   data_files_path = path.join(path.resolve(__dirname), './data');


program
	.version('0.1.0')
	.option('-m, --model [name]', 'Use the model')
	.option('-d, --debug', 'Turn mongoose debug on')
        .parse(process.argv)

function iterateDataFiles(passedIn) {
   return  process.stdout;
}

function cleanModel() {

}

function pushData() {

}

var r = fs.createReadStream('./data/client.json');

//r.pipe(iterateDataFiles())
   //r.pipe(process.stdout)
// .pipe().end(); emit?
function onreadiness() {
    if(fw !== undefined){

r.on('data', function(data) {
    console.log('Data '+data)
})
	
	var options = {
	    maxPending: -1,
	    maxAttempts: 3,
	    attemptTimeout: 3000,
	    // matchRegExp: /\.(log)$/,
	    // matchRegExp: /\.(json)|(md)$/,
	};

	walk = fw('/data/', options);

	walk.on('dir', function(p, s, fullPath) {
	    process.stdout.write('*')
	})


	
/*
fw('./data/')
    .on('dir', function(p){
	console.log('dir: %s', p)
    })
    .on('done', function() {
    console.log('%d dirs, ', this.dirs);
    }).walk();
      }
}

onreadiness();
*/
