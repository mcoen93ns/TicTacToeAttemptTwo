const {createAnEmptyTicTacToeBoard, playerPlacesHisMarkOnTheBoard} = require('../src/template');

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
    });
});