// var itemlist = document.querySelector('#items');
//parentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "rgb(100,240,240)";
// console.log(itemlist.parentNode.parentNode);
// itemlist.parentNode.parentNode.style.backgroundColor = "rgb(10,24,24)";


//parentElement-
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = "rgb(100,240,240)";
// console.log(itemlist.parentElement.parentElement);
// itemlist.parentElement.parentElement.style.backgroundColor = "rgb(10,24,24)";
//important- parentNode and ParentElemnt are similar


// childNode-
//console.log(itemlist.childNodes);//not recommended  coz line breaks and white
//space also get involved in collection as text node and gets quite confusing

//children-
// console.log(itemlist.children);//recommended coz it returns html elements nodes only.
// itemlist.children[1].style.backgroundColor = 'yellow';
//methods-
//1-firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello 1';
//2-nextSibling
// console.log(itemlist.nextSibling);//same as childnodes


//2-nextElementSibling
// console.log(itemlist.nextElementSibling);//same as children

//till now we have manipulated things using js but now we gonna create or add
//new stuff using js

//- create a div
var newDiv = document.createComment('div');
//add a classs
newDiv.className = 'Hello';
//add id
newDiv.id = 'Hello1';

//Add attribute
newDiv.setAttribute('title','Hello Div');
//create textNode
var newDivText = document.createTextNode('Hello World');
//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv,h1);