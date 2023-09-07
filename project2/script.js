'use strict';
const boardButtons = document.querySelectorAll('.cell');
const markElement = document.querySelectorAll('.mark')


function buttonClickEvent(){
    console.log('X')
    this.querySelector('.mark').textContent = 'X';
}

boardButtons.forEach(function(button){
    button.addEventListener('click', buttonClickEvent)
})
