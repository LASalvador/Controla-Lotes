var http =  require('http');
var fs = require('fs');


 var server = http.createServer(function(req, res){
   console.log('request was made: ' + req.url);
   res.writeHead(200, {'Content-type': 'text/plain'});
   var ReaderStream = fs.createReadStream(__dirname + '/lorem.txt' , 'utf8');
   // var WriterStream = fs.createWriteStream(__dirname + '/readMe.txt', 'utf8');

   ReaderStream.pipe(res);
 });

 server.listen(3000, '127.0.0.1');
 console.log('server on port 3000');
