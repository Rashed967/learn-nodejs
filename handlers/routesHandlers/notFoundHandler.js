/*
    title : not found handler title
    descriptio : 404 not found handler title
    author: rashed hasan
    date: 10/2/2024
*/

// modue scaffolding
const handler = {};

// methods and functions
handler.notFoundHandler = (requestProps, callback) => {
  callback(404, {
    message: "this is not found handler",
  });
};

// export module
module.exports = handler;
