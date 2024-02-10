/*
    title : not found handler title
    descriptio : 404 not found handler descriptions
    author: rashed hasan
    date: 10/2/2024
*/

// module scaffolding
const handler = {};

// functions and methods
handler.notFoundHandler = (requestProps, callback) => {
  callback(404, {
    message: "404 Error, Not found",
  });
};

// export module
module.exports = handler
