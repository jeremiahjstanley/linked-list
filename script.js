var paragraph = document.querySelector('p');
var button = document.querySelector('button');
var parent = document.querySelector('section');
button.addEventListener("click",function() {
  var newElement = document.createElement('h2');
  var newText = document.createTextNode("This is new");
  newElement.appendChild(newText);
  parent.insertBefore(newElement,paragraph);

 })
console.log('linked');
