//1
document.getElementById('container');

//2
document.querySelector('#container');

//3
document.querySelectorAll('.second');

//4
document.querySelector('ol .third');

//5
let findSection = document.querySelector('#container');
findSection.innerText = 'Hello';

//6
let footer = document.querySelector('.footer');
footer.classList.add('main');

//7
let footer = document.querySelector('.footer');
footer.classList.remove('main');

//8
let newLi = document.createElement('li');

//9
newLi.innerText = 'four'

//10
let list = document.querySelector('ul');
list.appendChild(newLi);

//11
let liInOl = document.querySelectorAll('ol li');
for(let i = 0; i  < liInOl.length; i++){
    liInOl[i].style.backgroundColor = 'green';
}

//12
let footer = document.querySelector('.footer');
footer.remove();