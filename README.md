# Kata TicTacToeAttemptTwo
UAT Scenarios:
1 – Game Board Creation phase:
Game Board Creation…
| |
-+-+-
| |
-+-+-
| |
Board Created.
The game will start with player X

Atomic behaviours:
- Creating an empty board
- Letting player X start the game

2 – Player X won with a vertical line
Player X:
X| |
-+-+-
X|O|
-+-+-
X| |O
PLAYER X WON!

Atomic behaviors:
- Player should place their mark in a cell on the board
- Players switch turns
- Vertical line with the same marks --> player wins

3 – Player O won with a horizontal line
Player O:
X| |X
-+-+-
O|O|O
-+-+-
X| |
PLAYER O WON!

Atomic behaviors:
- Horizontal line with same marks --> player wins

4 – Player X won with a diagonal line
Player X:
X| |
-+-+-
O|X|
-+-+-
O| |X
PLAYER X WON!

Atomic behaviors:
- Diagonal line with same marks --> player wins

5 – Game ends with a draw
Player X:
X|O|X
-+-+-
O|O|X
-+-+-
X|X|O
GAME ENDS WITH A DRAW!

Atomic behaviors:
- Board is full, no other winning condition met --> draw

Overview of atomic behaviors:

- Creating an empty board
    ✔- Create empty board with 9 cells

- Player should place their mark in an empty cell on the board
    ✔- Player X, cell 1 --> ['X','','','','','','','','']
    ✔- Player O, cell 9 --> ['','','','','','','','','O']
    ✔- Player X, cell 1 (not empty) --> false

- Players switch turns
    ✔- Turn 1: player X, Turn 2: Player O
    ✔- Turn 2: player O, Turn 3: Player X

- Vertical line with the same marks --> player wins
    ✔- ['X','','','X','','','X','',''] --> Player X wins
    ✔- ['','O','','','O','','','O',''] --> Player O wins
    ✔- ['','','X','','','X','','','X'] --> Player X wins
    🛠- ['','','','','','X','','','X'] --> No winner found

- Horizontal line with same marks --> player wins
- Diagonal line with same marks --> player wins
- Board is full, no other winning condition met --> draw
- Print the board in the console log