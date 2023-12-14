let button = document.querySelector('#button');
let hide = document.querySelector('.hide');

button.addEventListener('click', ()=>{
  hide.classList.toggle('reveal');
  
})

//Care Form
//For these purposes, it's randomized. (I don't know proper bonsai care)
var target = document.getElementById('target');
var cares = [
    'Bonsai should be placed outside, water once a day.',
    'Bonsai should be placed outside, water twice a day',
    'Bonsai should be placed inside, water once a day',
    'Bonsai should be placed outside, water twice a day',
];

function care() {
    var i = (Math.random() * cares.length) | 0;
    target.innerText = cares[i];
}

care();