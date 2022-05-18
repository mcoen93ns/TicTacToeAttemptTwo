function createAnEmptyTicTacToeBoard(emptyTicTacToeBoard) {
    emptyTicTacToeBoard = ['', '', '', '', '', '', '', '', ''];
    return emptyTicTacToeBoard
}

function findAnEmptyCellOnTheBoard(ticTacToeBoard){
    return ticTacToeBoard.indexOf('')
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

function checkForDraw(ticTacToeBoard){
    if (ticTacToeBoard.indexOf('') == -1) {
        return 'Draw'
    } else return 'No draw'
}

function printTheTicTacToeBoardInTheLog(ticTacToeBoard){
    console.log(ticTacToeBoard)
    return 'success'
}

function playTicTacToe(ticTacToeBoard){
    currentPlayer = 'X';
    isThereAWinner = false
    isDraw = false
    while (isThereAWinner == false && isDraw == false) {
        emptyCellOnTheBoard = findAnEmptyCellOnTheBoard(ticTacToeBoard);
        playerPlacesHisMarkOnTheBoard(ticTacToeBoard, currentPlayer, emptyCellOnTheBoard);
        if (checkVerticalLineForAWinner(ticTacToeBoard, currentPlayer) == 'Player ' + currentPlayer + ' has won') {
            isThereAWinner == true
        } if (checkHorizontalLineForAWinner(ticTacToeBoard, currentPlayer) == 'Player ' + currentPlayer + ' has won') {
            isThereAWinner == true
        } if (checkDiagonalLineForAWinner(ticTacToeBoard, currentPlayer) == 'Player ' + currentPlayer + ' has won') {
            isThereAWinner == true
        } if (checkForDraw(ticTacToeBoard) == 'Draw') {
            isDraw = true
        } currentPlayer = switchCurrentPlayer(currentPlayer)
        console.log(ticTacToeBoard)
    } if (isThereAWinner) {
        return 'Player ' + currentPlayer + ' has won'
    } else return 'Draw'
}

module.exports = {createAnEmptyTicTacToeBoard, findAnEmptyCellOnTheBoard, playerPlacesHisMarkOnTheBoard, switchCurrentPlayer, checkVerticalLineForAWinner, checkHorizontalLineForAWinner, checkDiagonalLineForAWinner, checkForDraw, printTheTicTacToeBoardInTheLog, playTicTacToe}