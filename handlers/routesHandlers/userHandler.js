/*
    title : user handler 
    descriptio : all routes of user handler
    author: rashed hasan
    date: 13/2/2024
*/

// module scaffolding
const handler = {};

// method
handler.userHandler = (requestProps, callback) => {
    const acceptedMethods = ["get", "post", "put", "delete"];
    if (acceptedMethods.indexOf(requestProps.method) >= 0) {
      handler._user[requestProps.method](requestProps, callback)
    } else {
      callback(405);
    }
};

// user req method object
handler._user = {};

handler._user.get = (requestProps, callback) => {
  callback(200);
};

handler._user.post = (requestProps, callback) => {
  callback(200);
};
handler._user.put = (requestProps, callback) => {
  callback(200);
};
handler._user.delete = (requestProps, callback) => {
  callback(200);
};

// export
module.exports = handler;
