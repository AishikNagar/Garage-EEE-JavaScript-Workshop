//DOM will allow us to interact directly with our HTML and CSS

/* Important Document attributes:
document.URL
document.body
document.head
document.links
*/

/*There are many methods of grabbing elements from the DOM:
document.getElementbyId()
document.getElementbyClassName()
document.getElementsbyTagName()
document.querySelector() - Returns the first object matching the css style selector:
  (For example if we had an id called 'pickme', we would use document.querySelector('#pickme'), just like we would in order to affect the css for it.)

document.querySelectorAll() - Returns all objects matching the css style selector
*/

/*EVENTS:

We want some action to occur only when a particular event is occurring, eg- Hovering over a button.
Js will listen for an event to occur:

myvariable.addEventListener(event,func);

Example-

var head = document.querySelector('h1')
head.addEventListener('click',changeColor)
*/

var header = document.querySelector("h1")

//header.style.colour = 'red';

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

// Function to change color of header

function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

// Now perform the action over intervals (milliseocnds):
setInterval("changeHeaderColor()",500);
