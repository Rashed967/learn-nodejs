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
const path = require("path");

// app object - module scaffolding
const handler = {};

// configaration variables

// methods
handler.handleRequest = (req, res) => {
  // part 1
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const trimmedPath = pathname.replace(/^\/+|\/$/g, "");
  const method = req.method.toLowerCase();
  const queryObject = parsedUrl.query;
  const headersObject = req.headers;

  // part 2

  const requestProps = {
    parsedUrl,
    pathname,
    trimmedPath,
    method,
    queryObject,
    headersObject,
  };

  // part 3

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  // part 4

  const chosenRoute = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  // part 5

  // part 6

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  //part 7

  req.on("end", () => {
    realData += decoder.end();
    chosenRoute(requestProps, (status, payload) => {
      status = typeof status === "number" ? status : 505;
      payload = typeof payload === "object" ? payload : {};
      const stringPayload = JSON.stringify(payload);
      res.writeHead(status);
      res.end(stringPayload);
    });
    res.end("server is ending");
  });
};

// export
module.exports = handler;
