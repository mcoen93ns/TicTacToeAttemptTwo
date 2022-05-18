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
    if (ticTacToeBoard[0] == currentPlayer && ticTacToeBoard[3] == currentPlayer && ticTacToeBoard[6] == currentPlayer ||
        ticTacToeBoard[1] == currentPlayer && ticTacToeBoard[4] == currentPlayer && ticTacToeBoard[7] == currentPlayer ||
        ticTacToeBoard[2] == currentPlayer && ticTacToeBoard[5] == currentPlayer && ticTacToeBoard[8] == currentPlayer){
        return 'Player ' + currentPlayer + ' has won'
    } else return 'No winner found'
}

function checkHorizontalLineForAWinner(ticTacToeBoard, currentPlayer){
    if (ticTacToeBoard[0] == currentPlayer && ticTacToeBoard[1] == currentPlayer && ticTacToeBoard[2] == currentPlayer ||
        ticTacToeBoard[3] == currentPlayer && ticTacToeBoard[4] == currentPlayer && ticTacToeBoard[5] == currentPlayer ||
        ticTacToeBoard[6] == currentPlayer && ticTacToeBoard[7] == currentPlayer && ticTacToeBoard[8] == currentPlayer) {
        return 'Player ' + currentPlayer + ' has won'
    } else return 'No winner found'
}

function checkDiagonalLineForAWinner(ticTacToeBoard, currentPlayer){
    if (ticTacToeBoard[0] == currentPlayer && ticTacToeBoard[4] == currentPlayer && ticTacToeBoard[8] == currentPlayer ||
        ticTacToeBoard[2] == currentPlayer && ticTacToeBoard[4] == currentPlayer && ticTacToeBoard[6] == currentPlayer){
        return 'Player ' + currentPlayer + ' has won'
    } else return 'No winner found'
}

module.exports = {createAnEmptyTicTacToeBoard, playerPlacesHisMarkOnTheBoard, switchCurrentPlayer, checkVerticalLineForAWinner, checkHorizontalLineForAWinner, checkDiagonalLineForAWinner}