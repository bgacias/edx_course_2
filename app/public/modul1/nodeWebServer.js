//http://blog.modulus.io/build-your-first-http-server-in-nodejs
//Lets require/import the HTTP module
var http = require('http');
var httpDispatcher  = require('../node_modules/httpdispatcher');
var dispatcher     = new httpDispatcher();

//Lets define a port we want to listen to
const PORT=3000;


dispatcher.onError(function(req, res) {
    res.writeHead(404);
    res.end();
});

//We need a function which handles requests and send response
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Dispatch
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});