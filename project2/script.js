'use strict';
const boardButtons = document.querySelectorAll('.cell');
let boardButton1 = document.querySelector('.cell1')
let boardButton2 = document.querySelector('.cell2')
let boardButton3 = document.querySelector('.cell3')
let boardButton4 = document.querySelector('.cell4')
let boardButton5 = document.querySelector('.cell5')
let boardButton6 = document.querySelector('.cell6')
let boardButton7 = document.querySelector('.cell7')
let boardButton8 = document.querySelector('.cell8')
let boardButton9 = document.querySelector('.cell9')
let i = 1;

let buttonClicked;


boardButton1.addEventListener('click', function(){
    console.log(i)
    if(i == 1){
        boardButton1.textContent = 'X'
        i++
    }else if(i == 2){
        boardButton1.textContent = 'O'
        i++
    }else if(i == 3){
        boardButton1.textContent = 'X'
        i++
    }else if(i == 4){
        boardButton1.textContent = "O"
        i++
    }else if(i == 5){
        boardButton1.textContent = "X"
        i++
    }else if(i == 6){
        boardButton1.textContent = "O"
        i++
    }else if(i == 7){
        boardButton1.textContent = "X"
        i++
    }else if(i == 8){
        boardButton1.textContent = "O"
        i++
    }else if(i == 9){
        boardButton1.textContent = 'X'
    }
})



