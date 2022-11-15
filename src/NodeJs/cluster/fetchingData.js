const dataMock = require("./data");
process.on("message", (msg) => {
  console.log("fetching pid ===> ", process.pid);

  if (msg === "start Fetching") {
    fetching();
  }
});

let fetching = async () => {
  let promise;
  promise = await Promise.resolve(dataMock);
  process.send({ fetchedData: promise });
};
