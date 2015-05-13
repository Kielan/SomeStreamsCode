var program = require('commander')
,   fs = require('fs')
,   fw = require('./node_modules/jesus/fw.js')
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

function humanRead() {
    console.log('apple');
}

var r = fs.createReadStream('./data/client.json');

//r.pipe(iterateDataFiles())
   //r.pipe(process.stdout)
// .pipe().end(); emit?
function onreadiness() {
    if(fw !== undefined){

//r.on('data', function(data) {
 //   console.log('Data '+data)
//})
	
	var options = {
	    maxPending: -1,
	    maxAttempts: 3,
	    attemptTimeout: 3000,
	    // matchRegExp: /\.(log)$/,
	    // matchRegExp: /\.(json)|(md)$/,
	};

	walk = fw('seedData/', options);

//	walk.pipe(pushData());
	
	walk.on('file', function(p, s, fp) {
	    if (p.match(/json/)) {
	    process.stdout.write('.');
	    console.log("sizzle " +p+ "  "+s + " " + fp);
	  //  var file = fs.createReadStream(p);

		fs.readFileSync(p, function(err, data) {
		    if (err) throw err;
		    console.log(data + "mibbit");
		});
		
	    //file.pipe(humanRead);

		//		console.log(file);
	    }

	    //return {}
	})
	walk.on('done', function() {
	    console.log('done');
	});

	walk.on('error', function(err) {
	    console.error(err +"this err!!!");
	})
	walk.walk();
    }
}
onreadiness();
	
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


*/
