'use strict';
const boardButtons = document.querySelectorAll('.cell');
const markElement = document.querySelector('.mark')

function addMark(mark){
  mark.textContent = "X"
}

function buttonClickEvent(){
    console.log('X')
    addMark(markElement)
}

boardButtons.forEach(function(button){
    button.addEventListener('click', buttonClickEvent)
})
