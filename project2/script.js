'use strict';
const boardButtons = document.querySelectorAll('.cell');

function addX(){
function buttonClickEvent(){
    console.log('X')
    this.querySelector('.mark').textContent = 'X';
}

boardButtons.forEach(function(button){
    button.addEventListener('click', buttonClickEvent)
})
}

function addO(){
    function buttonClickEvent(){
        console.log('O')
        this.querySelector('.mark').textContent = 'O';
    }
    
    boardButtons.forEach(function(button){
        button.addEventListener('click', buttonClickEvent)
    })
}

