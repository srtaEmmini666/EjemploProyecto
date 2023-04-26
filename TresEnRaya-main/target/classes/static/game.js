
const startGameButton = document.getElementById("start-game-button");
startGameButton.addEventListener("click", () => {
  const player1Name = document.getElementById("player1-name").value;
  const player2Name = document.getElementById("player2-name").value;
  localStorage.setItem("player1Name", player1Name);
  localStorage.setItem("player2Name", player2Name);
  initGame();
});

function initGame() {
    // Mostrar el tablero del juego
    const gameBoard = document.querySelector("table");
    gameBoard.style.display = "table";

  // Ocultar los campos de entrada de texto
  const nameInputs = document.getElementById("name-inputs");
  nameInputs.style.display = "none";

  // Mostrar los nombres de los jugadores
  const player1Name = localStorage.getItem("player1Name");
  const player2Name = localStorage.getItem("player2Name");
  const player1Element = document.getElementById("player1");
  const player2Element = document.getElementById("player2");
  player1Element.textContent = `${player1Name} (X)`;
  player2Element.textContent = `${player2Name} (O)`;
  // Agregar la clase player1-turn para mostrar la línea debajo del nombre del jugador 1
  player1Element.classList.add("player1-turn");

  // Inicializar el tablero y el turno actual
  turn = "X";
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("winner");
    cell.addEventListener("click", handleCellClick);
  });
}

function handleCellClick(event) {
  if (event.target.textContent === "") {
    event.target.textContent = turn;
    checkWin();
    checkDraw();
    turn = turn === "X" ? "O" : "X";

    // Agregar o eliminar las clases para mostrar u ocultar la línea debajo del nombre del jugador
    const player1Element = document.getElementById("player1");
    const player2Element = document.getElementById("player2");
    if (turn === "X") {
      player1Element.classList.add("player1-turn");
      player2Element.classList.remove("player2-turn");
    } else {
      player1Element.classList.remove("player1-turn");
      player2Element.classList.add("player2-turn");
    }
  }
}



let turn = "X";

const cells = document.querySelectorAll("td");

//variable para almacenar las marcas ganadoras y permitir que se muestren las 3 antes de mostrar el mensaje de victoria
let winningCombination = null;

function checkWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
for (let combination of winCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      winningCombination = combination;
      showWinningCombination();
      return;
    }
}
}

function showWinningCombination() {
winningCombination.forEach((cellIndex) => {
cells[cellIndex].classList.add("winner");
});
setTimeout(() => {
alert(`${cells[winningCombination[0]].textContent} ha ganado!`);
location.reload();
},500);
}

function checkDraw() {
let isDraw=true;
cells.forEach((cell)=>{
if(cell.textContent===""){
isDraw=false;
}
});
if(isDraw){
setTimeout(()=>{
alert("Empate");
location.reload();
},500);
}
}