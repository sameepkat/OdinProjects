const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");
const newGrid = document.querySelector("#newGrid");

//Variable declaration
let currentSize = 16;

newGrid.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter a number between 16-100"));
  if (newSize < 16 || newSize > 100) {
    alert("Not a valid size. Defaulting to 16x16");
    newSize = 16;
  }
  currentSize = newSize;
  generateSquares(currentSize);
});

resetBtn.addEventListener("click", () => {
  container.innerHTML = "";
  generateSquares(currentSize);
});

//Color Selector


function generateSquares(squares) {
  container.innerHTML = "";
  for (let i = 0; i < squares * squares; i++) {
    const square = document.createElement("div");

    square.style.height = `${600 / squares}px`;
    square.style.width = `${600 / squares}px`;
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = `black`;
    });
    container.appendChild(square);
  }
}
generateSquares(currentSize);
