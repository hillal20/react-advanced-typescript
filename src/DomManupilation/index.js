console.log("hello word ");

const body = document.getElementById("main");
console.log("body ==> ", body);
const headerH1 = document.createElement("h1");
headerH1.innerText = "I am her world";
headerH1.classList.add("headerH1");

body.appendChild(headerH1);

const helle = document.querySelector(".hello");
helle.style.color = 'blue'
const welcome = document.querySelector("#welcome")
console.log("hello ===> ", helle);
console.log('welcome ==> ', welcome)
console.log( welcome.getAttribute('title'))
helle.dataset.newName = 'new name'
console.log(helle.dataset)
// helle.remove();
// helle.removeAttribute('data')
