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
    return 'O'
}

module.exports = {createAnEmptyTicTacToeBoard, playerPlacesHisMarkOnTheBoard, switchCurrentPlayer}