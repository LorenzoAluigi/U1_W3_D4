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
        let couponCell = 
  divCell.forEach (index => {
    if (number === parseInt(index.innerText)) {
        index.classList.add ('selected')
        
    }
  })
 }
  
buttonExtrat.onclick = numberExtract

const buttonCoupon = document.getElementById ('create-coupon') 
const numberCoupon = document.getElementById ("number-coupon")
const couponContainer = document.getElementById ('coupon')
console.log(buttonCoupon);

const couponCreator = function () {
    
    let generalCouponDiv = document.createElement ('div')
    generalCouponDiv.classList.add ('div-general')

    // for (let i = 0; i < parseInt (numberCoupon.innerText) ; i++) {  
for(let j = 0; j < 28; j++) {
let couponDiv = document.createElement ('div')
        let couponCell = document.createElement ('span')
        couponDiv.classList.add ('coupon-cell')
        couponCell.classList.add ('coupon-board-cell')
        couponCell.innerText = Math.floor(Math.random()*29)
        couponContainer.appendChild (generalCouponDiv)
        generalCouponDiv.appendChild (couponDiv)
        couponDiv.appendChild (couponCell)
}
    }
// }

buttonCoupon.onclick = couponCreator 