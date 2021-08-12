const items = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningTextMessageElement = document.querySelector('[data-winning-message-text]')
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
let circleTurn
const restartButton = document.getElementById('restartButton')

const WINNING_COMBINATIONS = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


startGame()
function startGame(){
    circleTurn = false

    items.forEach(item => {
        item.classList.remove(X_CLASS)
        item.classList.remove(CIRCLE_CLASS)
        item.removeEventListener('click', handleClick)
        item.addEventListener("click", handleClick, {once : true})
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
    
}

restartButton.addEventListener('click', startGame)


function handleClick(e){
    const cell = e.target
    const currentClass =  circleTurn ? CIRCLE_CLASS : X_CLASS
    
    placeMark(cell, currentClass)

    if(checkWin(currentClass)){
        endGame(false)
    } else if(isDraw()){
        endGame(true)
    } else{
        swapTurns()
    setBoardHoverClass()
}
    }
  
function isDraw(){
    return [...items].every(cell =>{
        return cell.classList.contains(X_CLASS) ||
        cell.classList.contains(CIRCLE_CLASS)
    })
}

function endGame(draw){
    if(draw){
        winningTextMessageElement.innerText = "Draw"
            console.log("draw")
    } else{
        if (circleTurn){
            winningTextMessageElement.innerText = "O's win."
            console.log("O's win")
        }else {
            winningTextMessageElement.innerText = "X's win"
            console.log("X's win")
        }
        
    }
    winningMessageElement.classList.add('show')
}


function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){circleTurn = !circleTurn}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS)
    } else{
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination =>{
          return combination.every(index => {
             return items[index].classList.contains(currentClass)
        })
    })
}