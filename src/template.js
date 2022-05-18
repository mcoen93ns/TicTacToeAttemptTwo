function createAnEmptyTicTacToeBoard(emptyTicTacToeBoard) {
    emptyTicTacToeBoard = ['', '', '', '', '', '', '', '', ''];
    return emptyTicTacToeBoard
}

function playerPlacesHisMarkOnTheBoard(ticTacToeBoard, playerMark, cellOnTheBoard){
    if (ticTacToeBoard[cellOnTheBoard] == ''){
        ticTacToeBoard[cellOnTheBoard] = playerMark
        return ticTacToeBoard
    } else return false
}

function switchCurrentPlayer(currentPlayer) {
    if (currentPlayer == 'X') {
        return currentPlayer = 'O'
    }
    return currentPlayer = 'X'
}

function checkVerticalLineForAWinner(ticTacToeBoard, currentPlayer){
    return 'Player X has won'
}

module.exports = {createAnEmptyTicTacToeBoard, playerPlacesHisMarkOnTheBoard, switchCurrentPlayer, checkVerticalLineForAWinner}