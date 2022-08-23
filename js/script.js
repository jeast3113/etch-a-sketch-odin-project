// create global variables

const body = document.querySelector('body');
// console.log(body);
const gridContainerDiv = document.createElement('div');
gridContainerDiv.classList.add('grid-container');
body.appendChild(gridContainerDiv); 
let gridCellDiv = document.createElement('div');
gridCellDiv.classList.add('grid-cell');
counter = 1;


// create functions
// first create a grid 16x16 and add it to the DOM; add a creatingGrid function
// with a parameter set by default 16x16 
// test output with a counter
function creatingGrid(rowCol = 16) {
    for(let rows = 0; rows < rowCol; rows++) {
        for(let cols = 0; cols < rowCol; cols++) {
            gridCellDiv.textContent += "text"
            gridContainerDiv.appendChild(gridCellDiv);
        }
    }
}

creatingGrid();