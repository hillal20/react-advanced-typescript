## 1 ** append vs appendChild 
append can append string 
appendChild append a tag // tag means node 

## 2  ** div.innerText div.textContent div.innerHTML 
- innerText  will display only the the things you see in the screen

- innerContent will display everything even the ones styled with display none , and the spacing the indentation ... , it will display like exactly looks on the html 

- div.innerHTML = "<strong>hello world</strong>"
this way is not secure because the content is a string 

we do the div.innerText better :
const strong = document.createElement('strong')
strong.innerText = 'hello world'

div.append(strong)