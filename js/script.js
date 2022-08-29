// create global variables

const body = document.querySelector('body');
console.log(body);
//
const gridContainerDiv = document.createElement('div');
gridContainerDiv.classList.add('grid-container');
body.appendChild(gridContainerDiv); 
//
const gridButton = document.createElement('button');
gridButton.classList.add('grid-button');
gridButton.textContent = 'change grid';
body.appendChild(gridButton);
console.log(gridButton);


// create functions
// first create a grid 16x16 and add it to the DOM; add a creatingGrid function
// with a parameter set by default 16x16 
function creatingGrid(grid_cell = 16) {
    let totalCells = grid_cell * grid_cell;
    document.documentElement.style.setProperty('--grid-gridCell', grid_cell);
    for(let cell = 0; cell < totalCells; cell++) {
        let gridCellDiv = document.createElement('div');
        gridCellDiv.classList.add('grid-cell');
        gridContainerDiv.appendChild(gridCellDiv);
    }
}

// call functions
creatingGrid();
creatingHoverEffect();


// create a function for a hover-effect when the mouse enters the grid
function creatingHoverEffect() {
    let gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(gridCell => {
        gridCell.addEventListener('mouseenter', function(e) {
            e.target.style.backgroundColor = 'gray';
            e.target.style.transition = "1.0s";
        });
    });
}