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