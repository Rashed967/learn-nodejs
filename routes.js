/*
    title : application routes
    description : all route are there
    author : rashed
    date: 9/2/2024
*/

// dependencies
const { sampleHandler } = require("./handlers/routesHandlers/sampleHandlers");

// routes object
const routes = {
  sample: sampleHandler,
};

// export module
module.exports = routes;
