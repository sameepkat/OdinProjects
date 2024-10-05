const gameContainer = document.querySelector('.gameContainer');

const ticTacBoard = () => {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Box());

      const cell = document.createElement('div');
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      gameContainer.appendChild(cell);
    }
  }

  const getBoard = () => board;

  function updateBoard(row, column, updateWith) {
    board[row][column].setValue(updateWith);
    const cell = document.querySelector(`[data-row='${row}'][data-col='${column}']`);

    if (updateWith !== 0) {
      cell.textContent = updateWith;
    }
  }

  return { getBoard, updateBoard };
}

function Box() {
  let value = 0;
  function getValue() {
    return value;
  }
  function setValue(givenValue) {
    value = givenValue;
  }
  return { getValue, setValue };
}

function userController(player1 = "Player 1", player2 = "Player 2") {
  const board = ticTacBoard();
  const players = [
    { name: player1, type: "X" },
    { name: player2, type: "O" }
  ];

  let activePlayer = players[0];
  const getActivePlayer = () => activePlayer;

  function switchPlayer() {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  }

  function checkWin() {
    const b = board.getBoard();

    for (let i = 0; i < 3; i++) {
      if (b[i][0].getValue() !== 0 && b[i][0].getValue() === b[i][1].getValue() && b[i][1].getValue() === b[i][2].getValue()) {
        return true;
      }
    }

    for (let j = 0; j < 3; j++) {
      if (b[0][j].getValue() !== 0 && b[0][j].getValue() === b[1][j].getValue() && b[1][j].getValue() === b[2][j].getValue()) {
        return true;
      }
    }

    if (b[0][0].getValue() !== 0 && b[0][0].getValue() === b[1][1].getValue() && b[1][1].getValue() === b[2][2].getValue()) {
      return true;
    }

    if (b[0][2].getValue() !== 0 && b[0][2].getValue() === b[1][1].getValue() && b[1][1].getValue() === b[2][0].getValue()) {
      return true;
    }

    return false;
  }

  function checkTie() {
    const b = board.getBoard();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (b[i][j].getValue() === 0) {
          return false;
        }
      }
    }
    return true;
  }

  function playTurn(row, column) {
    const currentPlayer = getActivePlayer();
    const cellValue = board.getBoard()[row][column].getValue();

    if (cellValue === 0) {
      board.updateBoard(row, column, currentPlayer.type);

      if (checkWin()) {
        alert(`${currentPlayer.name} (${currentPlayer.type}) wins!`);
        resetGame();
      } else if (checkTie()) {
        alert("It's a tie!");
        resetGame();
      } else {
        switchPlayer();
      }
    } else {
      alert('Cell is already occupied!');
    }
  }

  function resetGame() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
      cell.textContent = "";
    });

    const b = board.getBoard();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        b[i][j].setValue(0);
      }
    }

    activePlayer = players[0];
  }

  return { getActivePlayer, playTurn, resetGame };
}

function renderBrowser(gameController) {
  const cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      const row = cell.dataset.row;
      const col = cell.dataset.col;
      gameController.playTurn(row, col);
    });
  });
}

const gameController = userController();
renderBrowser(gameController);

