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
let bButtonOccupied1, bButtonOccupied2, bButtonOccupied3, bButtonOccupied4, 
bButtonOccupied5, bButtonOccupied6, bButtonOccupied7, bButtonOccupied8, bButtonOccupied9;
let i = 1;

let buttonClicked;


boardButton1.addEventListener('click', function(){
    console.log(i)
    if(i == 1){
        boardButton1.textContent = 'X'
        i++
        bButtonOccupied1 = true
    }else if(i == 2){
        boardButton1.textContent = 'O'
        i++
        bButtonOccupied1 = true
    }else if(i == 3){
        boardButton1.textContent = 'X'
        i++
        bButtonOccupied1 = true
    }else if(i == 4){
        boardButton1.textContent = "O"
        i++
        bButtonOccupied1 = true
    }else if(i == 5){
        boardButton1.textContent = "X"
        i++
        bButtonOccupied1 = true
    }else if(i == 6){
        boardButton1.textContent = "O"
        i++
        bButtonOccupied1 = true
    }else if(i == 7){
        boardButton1.textContent = "X"
        i++
        bButtonOccupied1 = true
    }else if(i == 8){
        boardButton1.textContent = "O"
        i++
        bButtonOccupied1 = true
    }else if(i == 9){
        boardButton1.textContent = 'X'
        bButtonOccupied1 = true
    }
})

boardButton2.addEventListener('click', function(){
    console.log(i)
    if(i == 1){
        boardButton2.textContent = 'X'
        i++
        bButtonOccupied2 = true
    }else if(i == 2){
        boardButton2.textContent = 'O'
        i++
        bButtonOccupied2 = true
    }else if(i == 3){
        boardButton2.textContent = 'X'
        i++
        bButtonOccupied2 = true
    }else if(i == 4){
        boardButton2.textContent = "O"
        i++
        bButtonOccupied2 = true
    }else if(i == 5){
        boardButton2.textContent = "X"
        i++
        bButtonOccupied2 = true
    }else if(i == 6){
        boardButton2.textContent = "O"
        i++
        bButtonOccupied2 = true
    }else if(i == 7){
        boardButton2.textContent = "X"
        i++
        bButtonOccupied2 = true
    }else if(i == 8){
        boardButton2.textContent = "O"
        i++
        bButtonOccupied2 = true
    }else if(i == 9){
        boardButton2.textContent = 'X'
        bButtonOccupied2 = true
    }
})

boardButton3.addEventListener('click', function(){
    console.log(i)
    if(i == 1){
        boardButton3.textContent = 'X'
        i++
        bButtonOccupied3 = true
    }else if(i == 2){
        boardButton3.textContent = 'O'
        i++
        bButtonOccupied3 = true
    }else if(i == 3){
        boardButton3.textContent = 'X'
        i++
        bButtonOccupied3 = true
    }else if(i == 4){
        boardButton3.textContent = "O"
        i++
        bButtonOccupied3 = true
    }else if(i == 5){
        boardButton3.textContent = "X"
        i++
        bButtonOccupied3 = true
    }else if(i == 6){
        boardButton3.textContent = "O"
        i++
        bButtonOccupied3 = true
    }else if(i == 7){
        boardButton3.textContent = "X"
        i++
        bButtonOccupied3 = true
    }else if(i == 8){
        boardButton3.textContent = "O"
        i++
        bButtonOccupied3 = true
    }else if(i == 9){
        boardButton3.textContent = 'X'
        bButtonOccupied3 = true
    }
})

boardButton4.addEventListener('click', function(){
    console.log(i)
    if(i == 1){
        boardButton4.textContent = 'X'
        i++
        bButtonOccupied4 = true
    }else if(i == 2){
        boardButton4.textContent = 'O'
        i++
        bButtonOccupied4 = true
    }else if(i == 3){
        boardButton4.textContent = 'X'
        i++
        bButtonOccupied4 = true
    }else if(i == 4){
        boardButton4.textContent = "O"
        i++
        bButtonOccupied4 = true
    }else if(i == 5){
        boardButton4.textContent = "X"
        i++
        bButtonOccupied4 = true
    }else if(i == 6){
        boardButton4.textContent = "O"
        i++
        bButtonOccupied4 = true
    }else if(i == 7){
        boardButton4.textContent = "X"
        i++
        bButtonOccupied4 = true
    }else if(i == 8){
        boardButton4.textContent = "O"
        i++
        bButtonOccupied4 = true
    }else if(i == 9){
        boardButton4.textContent = 'X'
        bButtonOccupied4 = true
    }
})

boardButton5.addEventListener('click', function(){
    console.log(i)
    if(i == 1){
        boardButton5.textContent = 'X'
        i++
        bButtonOccupied5 = true
    }else if(i == 2){
        boardButton5.textContent = 'O'
        i++
        bButtonOccupied5 = true
    }else if(i == 3){
        boardButton5.textContent = 'X'
        i++
        bButtonOccupied5 = true
    }else if(i == 4){
        boardButton5.textContent = "O"
        i++
        bButtonOccupied5 = true
    }else if(i == 5){
        boardButton5.textContent = "X"
        i++
        bButtonOccupied5 = true
    }else if(i == 6){
        boardButton5.textContent = "O"
        i++
        bButtonOccupied5 = true
    }else if(i == 7){
        boardButton5.textContent = "X"
        i++
        bButtonOccupied5 = true
    }else if(i == 8){
        boardButton5.textContent = "O"
        i++
        bButtonOccupied5 = true
    }else if(i == 9){
        boardButton5.textContent = 'X'
        bButtonOccupied5 = true
    }
})

boardButton6.addEventListener('click', function(){
    console.log(i)
    if(i == 1){
        boardButton6.textContent = 'X'
        i++
        bButtonOccupied6 = true
    }else if(i == 2){
        boardButton6.textContent = 'O'
        i++
        bButtonOccupied6 = true
    }else if(i == 3){
        boardButton6.textContent = 'X'
        i++
        bButtonOccupied6 = true
    }else if(i == 4){
        boardButton6.textContent = "O"
        i++
        bButtonOccupied6 = true
    }else if(i == 5){
        boardButton6.textContent = "X"
        i++
        bButtonOccupied6 = true
    }else if(i == 6){
        boardButton6.textContent = "O"
        i++
        bButtonOccupied6 = true
    }else if(i == 7){
        boardButton6.textContent = "X"
        i++
        bButtonOccupied6 = true
    }else if(i == 8){
        boardButton6.textContent = "O"
        i++
        bButtonOccupied6 = true
    }else if(i == 9){
        boardButton6.textContent = 'X'
        bButtonOccupied6 = true
    }
})

boardButton7.addEventListener('click', function(){
    console.log(i)
    if(i == 1){
        boardButton7.textContent = 'X'
        i++
        bButtonOccupied7 = true
    }else if(i == 2){
        boardButton7.textContent = 'O'
        i++
        bButtonOccupied7 = true
    }else if(i == 3){
        boardButton7.textContent = 'X'
        i++
        bButtonOccupied7 = true
    }else if(i == 4){
        boardButton7.textContent = "O"
        i++
        bButtonOccupied7 = true
    }else if(i == 5){
        boardButton7.textContent = "X"
        i++
        bButtonOccupied7 = true
    }else if(i == 6){
        boardButton7.textContent = "O"
        i++
        bButtonOccupied7 = true
    }else if(i == 7){
        boardButton7.textContent = "X"
        i++
        bButtonOccupied7 = true
    }else if(i == 8){
        boardButton7.textContent = "O"
        i++
        bButtonOccupied7 = true
    }else if(i == 9){
        boardButton7.textContent = 'X'
        bButtonOccupied7 = true
    }
})

boardButton8.addEventListener('click', function(){
    console.log(i)
    if(i == 1){
        boardButton8.textContent = 'X'
        i++
        bButtonOccupied8 = true;
    }else if(i == 2){
        boardButton8.textContent = 'O'
        i++
        bButtonOccupied8 = true;
    }else if(i == 3){
        boardButton8.textContent = 'X'
        i++
        bButtonOccupied8 = true;
    }else if(i == 4){
        boardButton8.textContent = "O"
        i++
        bButtonOccupied8 = true;
    }else if(i == 5){
        boardButton8.textContent = "X"
        i++
        bButtonOccupied8 = true;
    }else if(i == 6){
        boardButton8.textContent = "O"
        i++
        bButtonOccupied8 = true;
    }else if(i == 7){
        boardButton8.textContent = "X"
        i++
        bButtonOccupied8 = true;
    }else if(i == 8){
        boardButton8.textContent = "O"
        i++
        bButtonOccupied8 = true;
    }else if(i == 9){
        boardButton8.textContent = 'X'
        bButtonOccupied8 = true;
    }
})

boardButton9.addEventListener('click', function(){
    console.log(i)
    if(i == 1){
        boardButton9.textContent = 'X'
        i++
        bButtonOccupied9 = true
    }else if(i == 2){
        boardButton9.textContent = 'O'
        i++
        bButtonOccupied9 = true
    }else if(i == 3){
        boardButton9.textContent = 'X'
        i++
        bButtonOccupied9 = true
    }else if(i == 4){
        boardButton9.textContent = "O"
        i++
        bButtonOccupied9 = true
    }else if(i == 5){
        boardButton9.textContent = "X"
        i++
        bButtonOccupied9 = true
    }else if(i == 6){
        boardButton9.textContent = "O"
        i++
        bButtonOccupied9 = true
    }else if(i == 7){
        boardButton9.textContent = "X"
        i++
        bButtonOccupied9 = true
    }else if(i == 8){
        boardButton9.textContent = "O"
        i++
        bButtonOccupied9 = true
    }else if(i == 9){
        boardButton9.textContent = 'X'
        bButtonOccupied9 = true
    }
})




