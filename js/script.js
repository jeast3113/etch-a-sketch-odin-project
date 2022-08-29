// create global variables

const body = document.querySelector('body');
console.log(body);
const gridContainerDiv = document.createElement('div');
gridContainerDiv.classList.add('grid-container');
body.appendChild(gridContainerDiv); 


// create functions
// first create a grid 16x16 and add it to the DOM; add a creatingGrid function
// with a parameter set by default 16x16 
function creatingGrid(grid_cell = 16) {
    let totalCells = grid_cell * grid_cell;
    document.documentElement.style.setProperty("--grid-gridCell", grid_cell);
    for(let cell = 0; cell < totalCells; cell++) {
        let gridCellDiv = document.createElement('div');
        gridCellDiv.classList.add('grid-cell');
        gridContainerDiv.appendChild(gridCellDiv);
    }
}

creatingGrid();
creatingHoverEffect();


// create a function for a hover-effect when the mouse enters the grid
function creatingHoverEffect() {
    // need to grab all of the grid cells that have already been created and appended
    // query select the class and log it to the console to confirm
    // create a variable to hold the nodes
    let gridCells = document.querySelectorAll('.grid-cell');
    console.log(gridCells);
}