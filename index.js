/*
  titile : uptime monitoring application
  description : use can check uptime of their links
  author : rashed hasan
  date : 8/2/2024
*/

// dependicies
const http = require("http");
const handler = require("./helpers/handleReqRes");

// app - scaffoold object
const app = {};

// config
app.config = {
  port : 3000,
}
/*
create server 
server listening
*/

// create server

app.createServer = () =>{
  const server = http.createServer(app.handleRequest)
  server.listen(app.config.port, () =>{
    console.log(`serve is listing on port ${app.config.port}`)
  })
}

// handle req res
app.handleRequest = handler.handleRequest;
// start the server
app.createServer();
