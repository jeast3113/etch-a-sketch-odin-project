// create global variables

const body = document.querySelector("body");

//
const header = document.createElement("header");
header.classList.add("header-container");
header.textContent = "Fill - A - Pixel";
body.appendChild(header);

//
const gridContainerDiv = document.createElement("div");
gridContainerDiv.classList.add("grid-container");
body.appendChild(gridContainerDiv);

//
const gridButton = document.createElement("button");
gridButton.classList.add("grid-button");
gridButton.textContent = "change grid";
body.appendChild(gridButton);

//
const clearGridBtn = document.createElement("button");
clearGridBtn.classList.add("clear-grid-button");
clearGridBtn.textContent = "clear grid";
body.appendChild(clearGridBtn);

//
const randomClrBtn = document.createElement("button");
randomClrBtn.classList.add("random-color-button");
randomClrBtn.textContent = "add random colors";
body.appendChild(randomClrBtn);

//
const footer = document.createElement("footer");
footer.classList.add("footer-container");
footer.textContent = "\u00A9 Copyright, jeast 2022";
body.appendChild(footer);

// ------------------------------------------------------------ //

// create functions

function randomRGBColor() {
  return Math.floor(Math.random() * 256);
}

function creatingGrid(grid_cell = 16) {
  let totalCells = grid_cell * grid_cell;
  document.documentElement.style.setProperty("--grid-gridCell", grid_cell);
  for (let cell = 0; cell < totalCells; cell++) {
    let gridCellDiv = document.createElement("div");
    gridCellDiv.classList.add("grid-cell");
    gridContainerDiv.appendChild(gridCellDiv);
  }
}

// - initial start
creatingGrid();
creatingHoverEffect();
//-----------------------//

function creatingHoverEffect() {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "gray";
      e.target.style.transition = "1.0s";
    });
  });
}

function creatingRandomColorHoverEffect() {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = `rgb(${randomRGBColor()}, ${randomRGBColor()}, ${randomRGBColor()})`;
      e.target.style.transition = "1.0s";
    });
  });
}

function changingGrid() {
  let userInput = parseInt(
    prompt("Please enter a number to change the grid: ")
  );
  if (userInput > 100) {
    alert(
      'Input is too large for grid. Please click the "change grid" button again'
    );
  } else if (userInput != parseInt(userInput)) {
    alert(
      'Input was not a number. Please click the "change grid" button again'
    );
  } else {
    gridContainerDiv.innerHTML = "";
    creatingGrid(userInput);
    creatingHoverEffect();
  }
}

function clearingGrid() {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) => {
    gridCell.style.backgroundColor = "";
  });
}

// event listeners
gridButton.addEventListener("click", changingGrid);
clearGridBtn.addEventListener("click", clearingGrid);
randomClrBtn.addEventListener("click", creatingRandomColorHoverEffect);
