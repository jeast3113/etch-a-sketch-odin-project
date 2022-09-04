// create global variables

const body = document.querySelector("body");

//
const header = document.createElement('header');
header.classList.add('header-container');
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

// Create a random number function for random RGB colors
function randomRGBColor() {
  return Math.floor(Math.random() * 256);
}

// first create a grid 16x16 and add it to the DOM; add a creatingGrid function
// with a parameter set by default 16x16
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

// create a function for a hover-effect when the mouse enters the grid
function creatingHoverEffect() {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "gray";
      e.target.style.transition = "1.0s";
    });
  });
}

//Create a similar function from above to utilize random colors during a hover event
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

// create a function for grid-button that prompts a user to enter a number
// and changes the grid to that number times that number without changing the size
// of the grid.  Create an event listener function for this
gridButton.addEventListener("click", changingGrid);

//Create a listener for the clear grid button - clears the grid to draw again
clearGridBtn.addEventListener("click", clearingGrid);

//Create a listener for the random color button - changes color each time the mouse 
//enters a new grid div
randomClrBtn.addEventListener('click', creatingRandomColorHoverEffect);
