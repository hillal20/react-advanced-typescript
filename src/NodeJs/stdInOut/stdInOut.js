process.stdout.write("Please enter your name \n");
process.stdin.on("data", (data) => {
  // data is a buffer
  console.log("data ===> ", data.toString());
});
