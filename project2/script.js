'use strict';
const boardButtons = document.querySelectorAll('.cell');

function buttonClickEvent(){
    console.log('X')
}

boardButtons.forEach(function(button){
    button.addEventListener('click', buttonClickEvent)
})
