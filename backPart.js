let board = ['', '', '', '', '', '', '', '', '']
let playerTurn = 0
let symbols = ['circle', 'cross']
let endGame = false
let winVictory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function handMove(position) {
    if (endGame) {
        return
    }
    
    if (board[position] == '') {
        board[position] = symbols[playerTurn]
        endGame = theresWinner()
        if (endGame == false) {
            playerTurn = (playerTurn == 0) ? 1 : 0
        }
    }
    return endGame
}

function theresWinner() {
    for (let i = 0; i < winVictory.length; i++) {
        let sequence = winVictory[i]
        let position1 = sequence[0]
        let position2 = sequence[1]
        let position3 = sequence[2]
        
	if (board[position1] == board[position2] &&
            board[position1] == board[position3] &&
            board[position1] != '') {
            return true
        }
    }
    return false
}

function confirmRefresh() {
    var okToRefresh = confirm("Do you really want to refresh the page?")
    
    if (okToRefresh) {
	setTimeout("location.reload(true);")
    }
}
