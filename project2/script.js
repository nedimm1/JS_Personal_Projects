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
let xPlace = document.querySelector('.PX')
let oPlace = document.querySelector('.PO')
let xWins = document.querySelector('.XW')
let oWins = document.querySelector('.OW')
let noWin = document.querySelector(".draw")
let bButtonOccupied1, bButtonOccupied2, bButtonOccupied3, bButtonOccupied4,
    bButtonOccupied5, bButtonOccupied6, bButtonOccupied7, bButtonOccupied8, bButtonOccupied9;
let i = 1;


const board = {
    bSpace1: null,
    bSpace2: null,
    bSpace3: null,
    bSpace4: null,
    bSpace5: null,
    bSpace6: null,
    bSpace7: null,
    bSpace8: null,
    bSpace9: null,
}

function disableButtons() {
    boardButton1.setAttribute('disabled', "")
    boardButton2.setAttribute('disabled', "")
    boardButton3.setAttribute('disabled', "")
    boardButton4.setAttribute('disabled', "")
    boardButton5.setAttribute('disabled', "")
    boardButton6.setAttribute('disabled', "")
    boardButton7.setAttribute('disabled', "")
    boardButton8.setAttribute('disabled', "")
    boardButton9.setAttribute('disabled', "")
}

function checkWinner() {
    if (board.bSpace1 == "X" && board.bSpace2 == "X" && board.bSpace3 == "X") {
        xWins.textContent = 'X Wins'
        console.log('win')
        disableButtons()
    } else if (board.bSpace4 == "X" && board.bSpace5 == "X" && board.bSpace6 == "X") {
        xWins.textContent = 'X Wins'
        console.log('win')
        disableButtons()
    } else if (board.bSpace7 == "X" && board.bSpace8 == "X" && board.bSpace9 == "X") {
        xWins.textContent = 'X Wins'
        console.log('win')
        disableButtons()
    } else if (board.bSpace1 == "X" && board.bSpace4 == "X" && board.bSpace7 == "X") {
        xWins.textContent = 'X Wins'
        console.log('win')
        disableButtons()
    } else if (board.bSpace2 == "X" && board.bSpace5 == "X" && board.bSpace8 == "X") {
        xWins.textContent = 'X Wins'
        console.log('win')
        disableButtons()
    } else if (board.bSpace3 == "X" && board.bSpace6 == "X" && board.bSpace9 == "X") {
        xWins.textContent = 'X Wins'
        console.log('win')
        disableButtons()
    } else if (board.bSpace1 == "X" && board.bSpace5 == "X" && board.bSpace9 == "X") {
        xWins.textContent = 'X Wins'
        console.log('win')
        disableButtons()
    } else if (board.bSpace3 == "X" && board.bSpace5 == "X" && board.bSpace7 == "X") {
        xWins.textContent = 'X Wins'
        console.log('win')
        disableButtons()
    }else if (board.bSpace1 == "O" && board.bSpace2 == "O" && board.bSpace3 == "O") {
        oWins.textContent = "O wins"
        console.log("OWin")
        disableButtons()
    } else if (board.bSpace4 == "O" && board.bSpace5 == "O" && board.bSpace6 == "O") {
        oWins.textContent = "O wins"
        console.log("OWin")
        disableButtons()
    } else if (board.bSpace7 == "O" && board.bSpace8 == "O" && board.bSpace9 == "O") {
        oWins.textContent = "O wins"
        console.log("OWin")
        disableButtons()
    } else if (board.bSpace1 == "O" && board.bSpace4 == "O" && board.bSpace7 == "O") {
        oWins.textContent = "O wins"
        console.log("OWin")
        disableButtons()
    } else if (board.bSpace2 == "O" && board.bSpace5 == "O" && board.bSpace8 == "O") {
        oWins.textContent = "O wins"
        console.log("OWin")
        disableButtons()
    } else if (board.bSpace3 == "O" && board.bSpace6 == "O" && board.bSpace9 == "O") {
        oWins.textContent = "O wins"
        console.log("OWin")
        disableButtons()
    }else if(board.bSpace3 == "O" && board.bSpace5 == "O" && board.bSpace7 == "O"){
        oWins.textContent = "O wins"
        console.log("OWin")
        disableButtons()
    }else if(board.bSpace1 == "O" && board.bSpace5 == "O" && board.bSpace9 == "O"){
        oWins.textContent = "O wins"
        console.log("OWin")
        disableButtons()
    }else if(xWins == "" && oWins == ""){
    }

}


boardButton1.addEventListener('click', function () {
    console.log(i)
    if (i == 1) {
        boardButton1.textContent = 'X'
        i++
        bButtonOccupied1 = true
        if (bButtonOccupied1 = true) {
            boardButton1.setAttribute('disabled', 'X')
        }
        board.bSpace1 = "X";
        console.log(board)
        checkWinner()
    } else if (i == 2) {
        boardButton1.textContent = 'O'
        i++
        bButtonOccupied1 = true
        if (bButtonOccupied1 = true) {
            boardButton1.setAttribute('disabled', 'O')
        }
        board.bSpace1 = "O";
        checkWinner()
    } else if (i == 3) {
        boardButton1.textContent = 'X'
        i++
        bButtonOccupied1 = true
        if (bButtonOccupied1 = true) {
            boardButton1.setAttribute('disabled', 'X')
        }
        board.bSpace1 = "X";
        checkWinner()
    } else if (i == 4) {
        boardButton1.textContent = "O"
        i++
        bButtonOccupied1 = true
        if (bButtonOccupied1 = true) {
            boardButton1.setAttribute('disabled', 'O')
        }
        board.bSpace1 = "O";
        checkWinner()
    } else if (i == 5) {
        boardButton1.textContent = "X"
        i++
        bButtonOccupied1 = true
        if (bButtonOccupied1 = true) {
            boardButton1.setAttribute('disabled', 'X')
        }
        board.bSpace1 = "X";
        checkWinner()

    } else if (i == 6) {
        boardButton1.textContent = "O"
        i++
        bButtonOccupied1 = true
        if (bButtonOccupied1 = true) {
            boardButton1.setAttribute('disabled', 'O')
        }
        board.bSpace1 = "O";
        checkWinner()

    } else if (i == 7) {
        boardButton1.textContent = "O"
        i++
        bButtonOccupied1 = true
        if (bButtonOccupied1 = true) {
            boardButton1.setAttribute('disabled', 'X')
        }
        board.bSpace1 = "X";
        checkWinner()

    } else if (i == 8) {
        boardButton1.textContent = "O"
        i++
        bButtonOccupied1 = true
        if (bButtonOccupied1 = true) {
            boardButton1.setAttribute('disabled', 'O')
        }
        board.bSpace1 = "O";
        checkWinner()

    } else if (i == 9) {
        boardButton1.textContent = 'X'
        bButtonOccupied1 = true
        if (bButtonOccupied1 = true) {
            boardButton1.setAttribute('disabled', 'X')
        }

        board.bSpace1 = "X";
        checkWinner()

    }
})


boardButton2.addEventListener('click', function () {
    console.log(i)
    if (i == 1) {
        boardButton2.textContent = 'X'
        i++
        bButtonOccupied2 = true
        if (bButtonOccupied2 = true) {
            boardButton2.setAttribute('disabled', 'X')
        }
        board.bSpace2 = "X";
        console.log(board)
        checkWinner()

    } else if (i == 2) {
        boardButton2.textContent = 'O'
        i++
        bButtonOccupied2 = true
        if (bButtonOccupied2 = true) {
            boardButton2.setAttribute('disabled', 'O')
        }
        board.bSpace2 = "O";
        checkWinner()

    } else if (i == 3) {
        boardButton2.textContent = 'X'
        i++
        bButtonOccupied2 = true
        if (bButtonOccupied2 = true) {
            boardButton2.setAttribute('disabled', 'X')
        }
        board.bSpace2 = "X";
        console.log(board)
        checkWinner()

    } else if (i == 4) {
        boardButton2.textContent = "O"
        i++
        bButtonOccupied2 = true
        if (bButtonOccupied2 = true) {
            boardButton2.setAttribute('disabled', 'O')
        }
        board.bSpace2 = "O";
        checkWinner()

    } else if (i == 5) {
        boardButton2.textContent = "X"
        i++
        bButtonOccupied2 = true
        if (bButtonOccupied2 = true) {
            boardButton2.setAttribute('disabled', 'X')
        }
        board.bSpace2 = "X";
        checkWinner()

    } else if (i == 6) {
        boardButton2.textContent = "O"
        i++
        bButtonOccupied2 = true
        if (bButtonOccupied2 = true) {
            boardButton2.setAttribute('disabled', 'O')
        }
        board.bSpace2 = "O";
        checkWinner()

    } else if (i == 7) {
        boardButton2.textContent = "X"
        i++
        bButtonOccupied2 = true
        if (bButtonOccupied2 = true) {
            boardButton2.setAttribute('disabled', 'X')
        }
        board.bSpace2 = "X";
        checkWinner()

    } else if (i == 8) {
        boardButton2.textContent = "O"
        i++
        bButtonOccupied2 = true
        if (bButtonOccupied2 = true) {
            boardButton2.setAttribute('disabled', 'O')
        }
        board.bSpace2 = "O";
        checkWinner()

    } else if (i == 9) {
        boardButton2.textContent = 'X'
        bButtonOccupied2 = true
        if (bButtonOccupied2 = true) {
            boardButton2.setAttribute('disabled', 'X')
        }
        board.bSpace2 = "X";
        checkWinner()

    }
})

boardButton3.addEventListener('click', function () {
    console.log(i)
    if (i == 1) {
        boardButton3.textContent = 'X'
        i++
        bButtonOccupied3 = true
        if (bButtonOccupied3 = true) {
            boardButton3.setAttribute('disabled', 'X')
        }
        board.bSpace3 = "X";
        console.log(board)
        checkWinner()

    } else if (i == 2) {
        boardButton3.textContent = 'O'
        i++
        bButtonOccupied3 = true
        if (bButtonOccupied3 = true) {
            boardButton3.setAttribute('disabled', 'O')
        }
        board.bSpace3 = "O";
        checkWinner()

    } else if (i == 3) {
        boardButton3.textContent = 'X'
        i++
        bButtonOccupied3 = true
        if (bButtonOccupied3 = true) {
            boardButton3.setAttribute('disabled', 'X')
        }
        board.bSpace3 = "X";
        checkWinner()

    } else if (i == 4) {
        boardButton3.textContent = "O"
        i++
        bButtonOccupied3 = true
        if (bButtonOccupied3 = true) {
            boardButton3.setAttribute('disabled', 'O')
        }
        board.bSpace3 = "O";
        checkWinner()

    } else if (i == 5) {
        boardButton3.textContent = "X"
        i++
        bButtonOccupied3 = true
        if (bButtonOccupied3 = true) {
            boardButton3.setAttribute('disabled', 'X')
        }
        board.bSpace3 = "X";
        console.log(board)
        checkWinner()

    } else if (i == 6) {
        boardButton3.textContent = "O"
        i++
        bButtonOccupied3 = true
        if (bButtonOccupied3 = true) {
            boardButton3.setAttribute('disabled', 'O')
        }
        board.bSpace3 = "O";
        checkWinner()

    } else if (i == 7) {
        boardButton3.textContent = "X"
        i++
        bButtonOccupied3 = true
        if (bButtonOccupied3 = true) {
            boardButton3.setAttribute('disabled', 'X')
        }
        board.bSpace3 = "X";
        checkWinner()

    } else if (i == 8) {
        boardButton3.textContent = "O"
        i++
        bButtonOccupied3 = true
        if (bButtonOccupied3 = true) {
            boardButton3.setAttribute('disabled', 'O')
        }
        board.bSpace3 = "O";
        checkWinner()

    } else if (i == 9) {
        boardButton3.textContent = 'X'
        bButtonOccupied3 = true
        if (bButtonOccupied3 = true) {
            boardButton3.setAttribute('disabled', 'X')
        }
        board.bSpace3 = "X";
        checkWinner()

    }
})

boardButton4.addEventListener('click', function () {
    console.log(i)
    if (i == 1) {
        boardButton4.textContent = 'X'
        i++
        bButtonOccupied4 = true
        if (bButtonOccupied4 = true) {
            boardButton4.setAttribute('disabled', 'X')
        }
        board.bSpace4 = "X";
        checkWinner()

    } else if (i == 2) {
        boardButton4.textContent = 'O'
        i++
        bButtonOccupied4 = true
        if (bButtonOccupied4 = true) {
            boardButton4.setAttribute('disabled', 'O')
        }
        board.bSpace4 = "O";
        checkWinner()
    } else if (i == 3) {
        boardButton4.textContent = 'X'
        i++
        bButtonOccupied4 = true
        if (bButtonOccupied4 = true) {
            boardButton4.setAttribute('disabled', 'X')
        }
        board.bSpace4 = "X";
        checkWinner()
    } else if (i == 4) {
        boardButton4.textContent = "O"
        i++
        bButtonOccupied4 = true
        if (bButtonOccupied4 = true) {
            boardButton4.setAttribute('disabled', 'O')
        }
        board.bSpace4 = "O";
        checkWinner()
    } else if (i == 5) {
        boardButton4.textContent = "X"
        i++
        bButtonOccupied4 = true
        if (bButtonOccupied4 = true) {
            boardButton4.setAttribute('disabled', 'X')
        }
        board.bSpace4 = "X";
        checkWinner()
    } else if (i == 6) {
        boardButton4.textContent = "O"
        i++
        bButtonOccupied4 = true
        if (bButtonOccupied4 = true) {
            boardButton4.setAttribute('disabled', 'O')
        }
        board.bSpace4 = "O";
        checkWinner()
    } else if (i == 7) {
        boardButton4.textContent = "X"
        i++
        bButtonOccupied4 = true
        if (bButtonOccupied4 = true) {
            boardButton4.setAttribute('disabled', 'X')
        }
        board.bSpace4 = "X";
        checkWinner()
    } else if (i == 8) {
        boardButton4.textContent = "O"
        i++
        bButtonOccupied4 = true
        if (bButtonOccupied4 = true) {
            boardButton4.setAttribute('disabled', 'O')
        }
        board.bSpace4 = "O";
        checkWinner()
    } else if (i == 9) {
        boardButton4.textContent = 'X'
        bButtonOccupied4 = true
        if (bButtonOccupied4 = true) {
            boardButton4.setAttribute('disabled', 'X')
        }
        board.bSpace4 = "X";
        checkWinner()
    }
})

boardButton5.addEventListener('click', function () {
    console.log(i)
    if (i == 1) {
        boardButton5.textContent = 'X'
        i++
        bButtonOccupied5 = true
        if (bButtonOccupied5 = true) {
            boardButton5.setAttribute('disabled', 'X')
        }
        board.bSpace5 = "X";
        checkWinner()
    } else if (i == 2) {
        boardButton5.textContent = 'O'
        i++
        bButtonOccupied5 = true
        if (bButtonOccupied5 = true) {
            boardButton5.setAttribute('disabled', 'O')
        }
        board.bSpace5 = "O";
        checkWinner()
    } else if (i == 3) {
        boardButton5.textContent = 'X'
        i++
        bButtonOccupied5 = true
        if (bButtonOccupied5 = true) {
            boardButton5.setAttribute('disabled', 'X')
        }
        board.bSpace5 = "X";
        checkWinner()
    } else if (i == 4) {
        boardButton5.textContent = "O"
        i++
        bButtonOccupied5 = true
        if (bButtonOccupied5 = true) {
            boardButton5.setAttribute('disabled', 'O')
        }
        board.bSpace5 = "O";
        checkWinner()
    } else if (i == 5) {
        boardButton5.textContent = "X"
        i++
        bButtonOccupied5 = true
        if (bButtonOccupied5 = true) {
            boardButton5.setAttribute('disabled', 'X')
        }
        board.bSpace5 = "X";
        checkWinner()
    } else if (i == 6) {
        boardButton5.textContent = "O"
        i++
        bButtonOccupied5 = true
        if (bButtonOccupied5 = true) {
            boardButton5.setAttribute('disabled', 'O')
        }
        board.bSpace5 = "O";
        checkWinner()
    } else if (i == 7) {
        boardButton5.textContent = "X"
        i++
        bButtonOccupied5 = true
        if (bButtonOccupied5 = true) {
            boardButton5.setAttribute('disabled', 'X')
        }
        board.bSpace5 = "X";
        checkWinner()
    } else if (i == 8) {
        boardButton5.textContent = "O"
        i++
        bButtonOccupied5 = true
        if (bButtonOccupied5 = true) {
            boardButton5.setAttribute('disabled', 'O')
        }
        board.bSpace5 = "O";
        checkWinner()
    } else if (i == 9) {
        boardButton5.textContent = 'X'
        bButtonOccupied5 = true
        if (bButtonOccupied5 = true) {
            boardButton5.setAttribute('disabled', 'X')
        }
        board.bSpace5 = "X";
        checkWinner()
    }
})

boardButton6.addEventListener('click', function () {
    console.log(i)
    if (i == 1) {
        boardButton6.textContent = 'X'
        i++
        bButtonOccupied6 = true
        if (bButtonOccupied6 = true) {
            boardButton6.setAttribute('disabled', 'X')
        }
        board.bSpace6 = "X";
        checkWinner()
    } else if (i == 2) {
        boardButton6.textContent = 'O'
        i++
        bButtonOccupied6 = true
        if (bButtonOccupied6 = true) {
            boardButton6.setAttribute('disabled', 'O')
        }
        board.bSpace6 = "O";
        checkWinner()
    } else if (i == 3) {
        boardButton6.textContent = 'X'
        i++
        bButtonOccupied6 = true
        if (bButtonOccupied6 = true) {
            boardButton6.setAttribute('disabled', 'X')
        }
        board.bSpace6 = "X";
        checkWinner()
    } else if (i == 4) {
        boardButton6.textContent = "O"
        i++
        bButtonOccupied6 = true
        if (bButtonOccupied6 = true) {
            boardButton6.setAttribute('disabled', 'O')
        }
        board.bSpace6 = "O";
        checkWinner()
    } else if (i == 5) {
        boardButton6.textContent = "X"
        i++
        bButtonOccupied6 = true
        if (bButtonOccupied6 = true) {
            boardButton6.setAttribute('disabled', 'X')
        }
        board.bSpace6 = "X";
        checkWinner()
    } else if (i == 6) {
        boardButton6.textContent = "O"
        i++
        bButtonOccupied6 = true
        if (bButtonOccupied6 = true) {
            boardButton6.setAttribute('disabled', 'O')
        }
        board.bSpace6 = "O";
        checkWinner()
    } else if (i == 7) {
        boardButton6.textContent = "X"
        i++
        bButtonOccupied6 = true
        if (bButtonOccupied6 = true) {
            boardButton6.setAttribute('disabled', 'X')
        }
        board.bSpace6 = "X";
        checkWinner()
    } else if (i == 8) {
        boardButton6.textContent = "O"
        i++
        bButtonOccupied6 = true
        if (bButtonOccupied6 = true) {
            boardButton6.setAttribute('disabled', 'O')
        }
        board.bSpace6 = "O";
        checkWinner()
    } else if (i == 9) {
        boardButton6.textContent = 'X'
        bButtonOccupied6 = true
        if (bButtonOccupied6 = true) {
            boardButton6.setAttribute('disabled', 'X')
        }
        board.bSpace6 = "X";
        checkWinner()
    }
})

boardButton7.addEventListener('click', function () {
    console.log(i)
    if (i == 1) {
        boardButton7.textContent = 'X'
        i++
        bButtonOccupied7 = true
        if (bButtonOccupied7 = true) {
            boardButton7.setAttribute('disabled', 'X')
        }
        board.bSpace7 = "X";
        checkWinner()
    } else if (i == 2) {
        boardButton7.textContent = 'O'
        i++
        bButtonOccupied7 = true
        if (bButtonOccupied7 = true) {
            boardButton7.setAttribute('disabled', 'O')
        }
        board.bSpace7 = "O";
        checkWinner()
    } else if (i == 3) {
        boardButton7.textContent = 'X'
        i++
        bButtonOccupied7 = true
        if (bButtonOccupied7 = true) {
            boardButton7.setAttribute('disabled', 'X')
        }
        board.bSpace7 = "X";
        checkWinner()
    } else if (i == 4) {
        boardButton7.textContent = "O"
        i++
        bButtonOccupied7 = true
        if (bButtonOccupied7 = true) {
            boardButton7.setAttribute('disabled', 'O')
        }
        board.bSpace7 = "O";
        checkWinner()
    } else if (i == 5) {
        boardButton7.textContent = "X"
        i++
        bButtonOccupied7 = true
        if (bButtonOccupied7 = true) {
            boardButton7.setAttribute('disabled', 'X')
        }
        board.bSpace7 = "X";
        checkWinner()
    } else if (i == 6) {
        boardButton7.textContent = "O"
        i++
        bButtonOccupied7 = true
        if (bButtonOccupied7 = true) {
            boardButton7.setAttribute('disabled', 'O')
        }
        board.bSpace7 = "O";
        checkWinner()
    } else if (i == 7) {
        boardButton7.textContent = "X"
        i++
        bButtonOccupied7 = true
        if (bButtonOccupied7 = true) {
            boardButton7.setAttribute('disabled', 'X')
        }
        board.bSpace7 = "X";
        checkWinner()
    } else if (i == 8) {
        boardButton7.textContent = "O"
        i++
        bButtonOccupied7 = true
        if (bButtonOccupied7 = true) {
            boardButton7.setAttribute('disabled', 'O')
        }
        board.bSpace7 = "O";
        checkWinner()
    } else if (i == 9) {
        boardButton7.textContent = 'X'
        bButtonOccupied7 = true
        if (bButtonOccupied7 = true) {
            boardButton7.setAttribute('disabled', 'X')
        }
        board.bSpace7 = "X";
        checkWinner()
    }
})

boardButton8.addEventListener('click', function () {
    console.log(i)
    if (i == 1) {
        boardButton8.textContent = 'X'
        i++
        bButtonOccupied8 = true;
        if (bButtonOccupied8 = true) {
            boardButton8.setAttribute('disabled', 'X')
        }
        board.bSpace8 = "X";
        checkWinner()
    } else if (i == 2) {
        boardButton8.textContent = 'O'
        i++
        bButtonOccupied8 = true;
        if (bButtonOccupied8 = true) {
            boardButton8.setAttribute('disabled', 'O')
        }
        board.bSpace8 = "O";
        checkWinner()
    } else if (i == 3) {
        boardButton8.textContent = 'X'
        i++
        bButtonOccupied8 = true;
        if (bButtonOccupied8 = true) {
            boardButton8.setAttribute('disabled', 'X')
        }
        board.bSpace8 = "X";
        checkWinner()
    } else if (i == 4) {
        boardButton8.textContent = "O"
        i++
        bButtonOccupied8 = true;
        if (bButtonOccupied8 = true) {
            boardButton8.setAttribute('disabled', 'O')
        }
        board.bSpace8 = "O";
        checkWinner()
    } else if (i == 5) {
        boardButton8.textContent = "X"
        i++
        bButtonOccupied8 = true;
        if (bButtonOccupied8 = true) {
            boardButton8.setAttribute('disabled', 'X')
        }
        board.bSpace8 = "X";
        checkWinner()
    } else if (i == 6) {
        boardButton8.textContent = "O"
        i++
        bButtonOccupied8 = true;
        if (bButtonOccupied8 = true) {
            boardButton8.setAttribute('disabled', 'O')
        }
        board.bSpace8 = "O";
        checkWinner()
    } else if (i == 7) {
        boardButton8.textContent = "X"
        i++
        bButtonOccupied8 = true;
        if (bButtonOccupied8 = true) {
            boardButton8.setAttribute('disabled', 'X')
        }
        board.bSpace8 = "X";
        checkWinner()
    } else if (i == 8) {
        boardButton8.textContent = "O"
        i++
        bButtonOccupied8 = true;
        if (bButtonOccupied8 = true) {
            boardButton8.setAttribute('disabled', 'O')
        }
        board.bSpace8 = "O";
        checkWinner()
    } else if (i == 9) {
        boardButton8.textContent = 'X'
        bButtonOccupied8 = true;
        if (bButtonOccupied8 = true) {
            boardButton8.setAttribute('disabled', 'X')
        }
        board.bSpace8 = "X";
        checkWinner()
    }
})

boardButton9.addEventListener('click', function () {
    console.log(i)
    if (i == 1) {
        boardButton9.textContent = 'X'
        i++
        bButtonOccupied9 = true
        if (bButtonOccupied9 = true) {
            boardButton9.setAttribute('disabled', 'X')
        }
        board.bSpace9 = "X";
        checkWinner()
    } else if (i == 2) {
        boardButton9.textContent = 'O'
        i++
        bButtonOccupied9 = true
        if (bButtonOccupied9 = true) {
            boardButton9.setAttribute('disabled', 'O')
        }
        board.bSpace9 = "O";
        checkWinner()
    } else if (i == 3) {
        boardButton9.textContent = 'X'
        i++
        bButtonOccupied9 = true
        if (bButtonOccupied9 = true) {
            boardButton9.setAttribute('disabled', 'X')
        }
        board.bSpace9 = "X";
        checkWinner()
    } else if (i == 4) {
        boardButton9.textContent = "O"
        i++
        bButtonOccupied9 = true
        if (bButtonOccupied9 = true) {
            boardButton9.setAttribute('disabled', 'O')
        }
        board.bSpace9 = "O";
        checkWinner()
    } else if (i == 5) {
        boardButton9.textContent = "X"
        i++
        bButtonOccupied9 = true
        if (bButtonOccupied9 = true) {
            boardButton9.setAttribute('disabled', 'X')
        }
        board.bSpace9 = "X";
        checkWinner()
    } else if (i == 6) {
        boardButton9.textContent = "O"
        i++
        bButtonOccupied9 = true
        if (bButtonOccupied9 = true) {
            boardButton9.setAttribute('disabled', 'O')
        }
        board.bSpace9 = "O";
        checkWinner()
    } else if (i == 7) {
        boardButton9.textContent = "X"
        i++
        bButtonOccupied9 = true
        if (bButtonOccupied9 = true) {
            boardButton9.setAttribute('disabled', 'X')
        }
        board.bSpace9 = "X";
        checkWinner()
    } else if (i == 8) {
        boardButton9.textContent = "O"
        i++
        bButtonOccupied9 = true
        if (bButtonOccupied9 = true) {
            boardButton9.setAttribute('disabled', 'O')
        }
        board.bSpace9 = "O";
        checkWinner()
    } else if (i == 9) {
        boardButton9.textContent = 'X'
        bButtonOccupied9 = true
        if (bButtonOccupied9 = true) {
            boardButton9.setAttribute('disabled', 'X')
        }
        board.bSpace9 = "X";
        checkWinner()
    }
})




