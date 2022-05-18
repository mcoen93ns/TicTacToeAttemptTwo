function createAnEmptyTicTacToeBoard(emptyTicTacToeBoard) {
    emptyTicTacToeBoard = ['', '', '', '', '', '', '', '', ''];
    return emptyTicTacToeBoard
}

function playerPlacesHisMarkOnTheBoard(ticTacToeBoard, playerMark, cellOnTheBoard){
    ticTacToeBoard[cellOnTheBoard] = playerMark
    return ticTacToeBoard
}

module.exports = {createAnEmptyTicTacToeBoard, playerPlacesHisMarkOnTheBoard}