const {createAnEmptyTicTacToeBoard, playerPlacesHisMarkOnTheBoard, switchCurrentPlayer, checkVerticalLineForAWinner, checkHorizontalLineForAWinner, checkDiagonalLineForAWinner} = require('../src/template');

describe('This is a testsuite that describes the working of a game called TicTacToe', () => {
    describe('An empty game board needs to be created, so that we can play on it', () => {
        it('A board should contain 9 empty cells', () => {
            var emptyTicTacToeBoard = ''
            expect(createAnEmptyTicTacToeBoard(emptyTicTacToeBoard)).toEqual(['','','','','','','','',''])
        });
    });
    describe('Players should be able to place their mark in a cell on the board', () => {
        it('Player X places his mark in the first cell', () => {
            var ticTacToeBoard = ['', '', '', '', '', '', '', '', '']
            expect(playerPlacesHisMarkOnTheBoard(ticTacToeBoard, 'X', 0)).toEqual(['X', '', '', '', '', '', '', '', ''])
        });
        it('Player O places his mark in the bottom right cell', () => {
            var ticTacToeBoard = ['', '', '', '', '', '', '', '', '']
            expect(playerPlacesHisMarkOnTheBoard(ticTacToeBoard, 'O', 8)).toEqual(['', '', '', '', '', '', '', '', 'O'])
        });
        it('Player X cannot place his mark in cell 1, because it is not empty', () => {
            var ticTacToeBoard = ['X', '', '', '', '', '', '', '', '']
            expect(playerPlacesHisMarkOnTheBoard(ticTacToeBoard, 'X', 0)).toEqual(false)
        });
    });
    describe('When a player has placed his mark, the turn switches to the other player', () => {
        it('Turn 1: player X, Turn 2: Player O', () => {
            var currentPlayer = 'X'
            expect(switchCurrentPlayer(currentPlayer)).toEqual('O')
        });
        it('Turn 2: player O, Turn 3: Player X', () => {
            var currentPlayer = 'O'
            expect(switchCurrentPlayer(currentPlayer)).toEqual('X')
        });
    });
    describe('If one of the following situations occurs, a player has won the game', () => {
        describe('When a vertical line on the board only contains the marks of a certain player', () => {
            it('First ⬇ with X marks --> X wins', () => {
                var ticTacToeBoard = ['X', '', '', 'X', '', '', 'X', '', '']
                var currentPlayer = 'X'
                expect(checkVerticalLineForAWinner(ticTacToeBoard, currentPlayer)).toEqual('Player X has won')
            });
            it('Second ⬇ with O marks --> O wins', () => {
                var ticTacToeBoard = ['', 'O', '', '', 'O', '', '', 'O', '']
                var currentPlayer = 'O'
                expect(checkVerticalLineForAWinner(ticTacToeBoard, currentPlayer)).toEqual('Player O has won')
            });
            it('Third ⬇ with X marks --> X wins', () => {
                var ticTacToeBoard = ['', '', 'X', '', '', 'X', '', '', 'X']
                var currentPlayer = 'X'
                expect(checkVerticalLineForAWinner(ticTacToeBoard, currentPlayer)).toEqual('Player X has won')
            });
            it('No line filled with X marks --> no winner found', () => {
                var ticTacToeBoard = ['', '', '', '', '', 'X', '', '', 'X']
                var currentPlayer = 'X'
                expect(checkVerticalLineForAWinner(ticTacToeBoard, currentPlayer)).toEqual('No winner found')
            });
        });
        describe('When a horizontal line on the board only contains the marks of a certain player', () => {
            it('First ➡ with X marks --> X wins', () => {
                var ticTacToeBoard = ['X', 'X', 'X', '', '', '', '', '', '']
                var currentPlayer = 'X'
                expect(checkHorizontalLineForAWinner(ticTacToeBoard, currentPlayer)).toEqual('Player X has won')
            });
            it('Second ➡ with O marks --> O wins', () => {
                var ticTacToeBoard = ['', '', '', 'O', 'O', 'O', '', '', '']
                var currentPlayer = 'O'
                expect(checkHorizontalLineForAWinner(ticTacToeBoard, currentPlayer)).toEqual('Player O has won')
            });
            it('Third ➡ with X marks --> X wins', () => {
                var ticTacToeBoard = ['', '', '', '', '', '', 'X', 'X', 'X']
                var currentPlayer = 'X'
                expect(checkHorizontalLineForAWinner(ticTacToeBoard, currentPlayer)).toEqual('Player X has won')
            });
            it('No ➡ complete with X marks --> no winner found', () => {
                var ticTacToeBoard = ['', '', '', '', '', '', 'X', '', 'X']
                var currentPlayer = 'X'
                expect(checkHorizontalLineForAWinner(ticTacToeBoard, currentPlayer)).toEqual('No winner found')
            });
        });
        describe('When a diagonal line on the board only contains the marks of a certain player', () => {
            it('↘ with X marks --> X wins', () => {
                var ticTacToeBoard = ['X', '', '', '', 'X', '', '', '', 'X']
                var currentPlayer = 'X'
                expect(checkDiagonalLineForAWinner(ticTacToeBoard, currentPlayer)).toEqual('Player X has won')
            });
        });
    });
});