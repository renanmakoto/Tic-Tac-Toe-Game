document.addEventListener('DOMContentLoaded', () => {
    let sqrs = document.querySelectorAll('.sqr')
    sqrs.forEach((sqr) => {
        sqr.addEventListener('click', handClick)
    })
})

function handClick(event) {
    let sqr = event.target
    let position = sqr.id
    
    if (handMove(position)) {
        setTimeout(() => {
            alert("Game over! The winner is " + playerTurn)
        }, 10)
    }
    updateSqr(position)
}
function updateSqr(position) {
    let sqr = document.getElementById(position.toString())
    let symbol = board[position]
    sqr.innerHTML = `<div class='${symbol}'></div>`
}
function updateSqrs() {
    let sqrs = document.querySelectorAll('.sqr')
    sqrs.forEach((sqr) => {
        let position = sqr.id
        let symbol = board[position]
        if (symbol != '') {
            sqr.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}
