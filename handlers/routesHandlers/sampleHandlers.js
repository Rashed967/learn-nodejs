/*
    title : sample handler title
    descriptio : sample handler title
    author: rashed hasan
    date: 10/2/2024
*/

// modue scaffolding
const handler = {};

// methods and function

handler.sampleHandler = (requestProps, callback) => {
  callback(200, {
    message: "This is sample route",
  });
};

// export module
module.exports = handler;
