/*
    title : handle request response
    descriptio : handle request response
    author: rashed hasan
    date: 9/2/2024
*/

// dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routesHandlers/notFoundHandler");

// app object - module scaffolding
const handler = {};

// configaration variables

// methods
handler.handleRequest = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/$/g, "");
  const method = req.method.toLowerCase();
  const queryObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProps = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryObject,
    headersObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  chosenHandler(requestProps, (status, payload) => {
    (status = typeof status === "number" ? status : 500),
      (payload = typeof payload === "object" ? payload : {});
    const payloadString = JSON.stringify(payload);
    res.writeHead(status);
    res.end(payloadString);
  });

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    res.end("server  is always running");
  });
};

// export
module.exports = handler;
