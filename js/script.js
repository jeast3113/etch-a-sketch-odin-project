// create global variables

const body = document.querySelector('body');
console.log(body);
const gridContainerDiv = document.createElement('div');
gridContainerDiv.classList.add('grid-container');
body.appendChild(gridContainerDiv); 


// create functions
// first create a grid 16x16 and add it to the DOM; add a creatingGrid function
// with a parameter set by default 16x16 
function creatingGrid(rowCol = 16) {
    let totalCells = rowCol * rowCol;
    document.documentElement.style.setProperty("--grid-rowCol", rowCol);
    for(let cell = 0; cell < totalCells; cell++) {
        let rowColDiv = document.createElement('div');
        rowColDiv.classList.add('row-col');
        gridContainerDiv.appendChild(rowColDiv);
    }
}

creatingGrid();
creatingHoverEffect();


// create a function for a hover-effect when the mouse enters the grid
function creatingHoverEffect() {
    console.log("Test");
}