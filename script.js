console.log('hello world!');

// let boardContainer = document.getElementsByClassName ('board')
// console.log (boardContainer)
const extractNumber = []

const boardCreator = function () {
    
    const boardContainer = document.getElementById ('board') 
    console.log (boardContainer) 
    
    for(let i = 0; i < 76; i++) {
        // let boardContainer = document.getElementsByClassName ('board')
        let boardDiv = document.createElement ('div')
        let boardCell = document.createElement ('span')
        boardDiv.classList.add ('div-cell')
        boardCell.classList.add ('board-cell')
        boardCell.innerText = (i + 1)
        console.log(boardCell);
        boardContainer.appendChild (boardDiv)
        boardDiv.appendChild (boardCell)
    }
}

boardCreator ()

const buttonExtrat = document.getElementById ('submit')

const numberExtract = function () {
        // const numberTarget = document.getElementById ('number-display')
        // numberTarget.value 
        let number= Math.floor (Math.random ()* 77)
        let divCell = document.querySelectorAll ('.div-cell')
        
  divCell.forEach (index => {
    if (number === parseInt(index.innerText)) {
        index.classList.add ('selected')
    }
  })
 }
  
buttonExtrat.onclick = numberExtract



