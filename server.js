var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;



app.use(bodyParser.json()); //--> it allows to parse JSON objects sent on the
							// on the request body.
							// Every time a JSON comes in, express will parse it
							// and access it via request.body;


// app.get('/', function (request, response) {
// 	response.json(todos);
// });

// --> The class had the index.html inside a public directory 
//     so you might do  __dirname +'/public'
app.use(express.static(__dirname));



// At the end, you tell it to listen to specific port. 
app.listen(PORT, function () {
	console.log('Server listering on port ' + PORT + ' ...');
});
