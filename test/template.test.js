const createAnEmptyTicTacToeBoard = require('../src/template');

describe('This is a testsuite that describes the working of a game called TicTacToe', () => {
    describe('An empty game board needs to be created, so that we can play on it', () => {
        it('A board should contain 9 empty cells', () => {
            var emptyTicTacToeBoard = ''
            expect(createAnEmptyTicTacToeBoard(emptyTicTacToeBoard)).toEqual(['','','','','','','','',''])
        });
    });
});