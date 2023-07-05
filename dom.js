//document.title='123' 
const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'
const title = document.getElementsByClassName("title");
console.log(title);
title[0].style.color = 'green';
title[0].style.fontWeight = 'bold';
const list = document.getElementsByClassName("list-group-item");
for (let i = 0; i < list.length; i++) {
    list[i].style.color = 'voilet';
    list[i].style.fontWeight = 'bold';
}
list[2].style.backgroundColor = 'yellow';
var li = document.getElementsByTagName('li');
// li[4].textContent = 'new item';
// li[4].style.backgroundColor = '#D03D56';
// li[4].style.fontWeight = 'bold';
header.style.borderBottom = 'solid 5px #000'
// li[1].style.backgroundColor = 'green';
// li[2].style.display = 'none';
var input = document.querySelector('#main-header');
input.value = 'Hello World';

var item = document.querySelector('.list-group-item');
item.style.backgroundColor = 'red';

var lst = document.querySelector('.list-group-item:last-child');
lst.style.backgroundColor = 'blue';

var second = document.querySelectorAll('.list-group-item');
second[1].style.backgroundColor = 'green';
for(let i = 0; i < list.length; i++){
    if(i%2 != 0){
        second[i].style.backgroundColor = 'green';
    }
}
