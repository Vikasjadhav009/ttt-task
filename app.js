//use express 
var express = require('express');
var app = express();

//use request module to fetch file from remote server
var request = require('request');

//check for enviroment veriable otherwise set default port 3000
PORT = process.env.PORT || 5000;
 
//use ejs for server side templating
app.set('view engine','ejs');

//use this public directory to store my angular files
app.use('/assets',express.static(__dirname+'/public'));

//render default index.ejs page
app.get('/',function(req,res){

	res.render('index');
});

//fetched text file from remote server
request('http://terriblytinytales.com/test.txt',function(err,res,body){

	 //use split method to create array of all words in text file
	 var fileArr = body.split(/\W+/);

	 var unique = [];
	 var repeat = [];
 	 var topN = [];

 	fileArr.forEach(function(cur,index){

 			//loop through fileArr to find out unique words and create new array

 			if(unique.indexOf(cur) === -1){

 		 			unique.push(cur);
 		 			
 		 		}
 		


  	});

 	//compare this 2 array to find out no of occurrence and push into new array repeat
 	unique.forEach(function(cur,index){
 	var count = 0;

 		for(var i=0; i<fileArr.length; i++){

 			if(cur === fileArr[i] ){

 				count++;
 				

 			}

 		}
 		repeat.push(count);

 });

//sort repeat array to find out rank
var sortArr = repeat.slice(0);

 sortArr.sort(function(a,b){

 	return b-a;
 });

 //stored index of sortArr in new array 
		sortArr.forEach(function(cur,index){

			if(sortArr[index] === sortArr[index-1]){

				return;
			}

			for(var i = 0;i<repeat.length;i++){

		 		if(repeat[i] === cur){

		 			topN.push(i)
		 		}
			 }


		});


	//create object of data which contains all array	
		var data = {
			unique:unique,
			sortArr:sortArr,
			topN:topN,
			fileArr:fileArr
		}

	//send this object as JSON to frontend (AngularJS) as http req to display result
	app.get('/resultapi',function(req,res){

			res.json(data);

	});




});



app.listen(PORT,function(){

	console.log('node app is runnng on port '+PORT);
});