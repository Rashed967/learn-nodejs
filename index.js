/*
  titile : uptime monitoring application
  description : use can check uptime of their links
  author : rashed hasan
  date : 8/2/2024
*/

// dependicies
const http = require("http");
const handler = require("./helpers/handleReqRes");
const environment = require("./helpers/environments.");
const lib = require("./lib/data");

// testing file to write
// lib.create("test", "file1", {name: 'rashed', XP: 1337}, (err)=>{
//   console.log(err)
// })

// read file
// lib.read('test', 'file1', (err, data) =>{
//   console.log(err, data)
// })

// update file
// lib.update('test', 'file1', {name : "portugal", player: "CR7", age : 37}, (err)=>{
//   console.log(err)
// })

// delete file
lib.delete("test", "file1", (message) => {
  console.log(message);
});

// app - scaffoold object
const app = {};

// config
app.config = {
  port: 3000,
};
/*
create server 
server listening
*/

// create server

app.createServer = () => {
  const server = http.createServer(app.handleRequest);
  server.listen(environment.port, () => {
    console.log(`serve is listing on port ${environment.port}`);
  });
};

// handle req res
app.handleRequest = handler.handleRequest;
// start the server
app.createServer();
