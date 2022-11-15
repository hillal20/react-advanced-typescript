//// call
const objHere = { name: "Hilal" };

const sayHEllo = function (lastName) {
  const { name } = this;
  const greed = `hello ${name}  ${lastName}`;
  console.log(greed);
};

sayHEllo.call(objHere, "aissani");

// for more than one argument in the function
sayHEllo.apply(objHere, ["aissani"]);

// bind function
const bindSayHello = sayHEllo.bind(objHere);
bindSayHello("aissani");
