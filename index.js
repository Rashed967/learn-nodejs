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

// // testing file to write
// lib.create("newDir", "file2", { name: "rashed", age: 26 }, (message) => {
//   console.log(message);
// });

//read data
// lib.read('newDir', 'file3', (err, data)=>{
//   console.log(err, data)
// })

// // update data
// lib.update("newDir", "file2", { name: "nasir uddin", age: 35 }, (message) => {
//   console.log(message);
// });

// // delete the file
// lib.delete("test", "newFile", (message) => {
//   console.log(message);
// });

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
