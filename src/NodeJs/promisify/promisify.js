const { promisify } = require("util");

const myFn = (err, data) => {
  if (err) {
    return console.log(err.message);
  }
  return console.log("data => ", data);
};

const myPromisedFunction = (result, cb) => {
  if (result) {
    cb(null, result);
  } else {
    cb(new Error("no result"));
  }
};
////////////////  ////////////////////////////////////////
myPromisedFunction("i am using cb right now ", myFn);
///////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
const convertedMethod = promisify(myPromisedFunction);
convertedMethod("i am using a promise right now")
  .then((res) => {
    console.log("res ==> ", res);
  })
  .catch((error) => {
    console.log("error ==> ", error);
  });
////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////

convertedMethod(null)
  .then((res) => {
    console.log("res ==> ", res);
  })
  .catch((error) => {
    console.log("error ==> ", error.message);
  });

///////////////////////////////////////////////////////////
