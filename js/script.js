// create global variables

const body = document.querySelector('body');
console.log(body);
//
const gridContainerDiv = document.createElement('div');
gridContainerDiv.classList.add('grid-container');
body.appendChild(gridContainerDiv); 
//
const grid_cell = 16;

//
const gridButton = document.createElement('button');
gridButton.classList.add('grid-button');
gridButton.textContent = 'change grid';
body.appendChild(gridButton);
//
const clearGridBtn = document.createElement('button');
clearGridBtn.classList.add('clear-grid-button');
clearGridBtn.textContent = 'clear grid';
body.appendChild(clearGridBtn);

//
const footer = document.createElement('footer');
footer.classList.add('footer-container');
footer.textContent = "\u00A9 Copyright, The Odin Project, jeast 2022";
console.log(footer);
body.appendChild(footer);


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

// call functions - initial start
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

// create a function for grid-button that prompts a user to enter a number 
// and changes the grid to that number times that number without changing the size
// of the grid.  Create an event listener function for this
gridButton.addEventListener('click', () => {
    let userInput = parseInt(prompt('Please enter a number to change the grid: '));
    if(userInput > 100) {
        alert('Input is too large for grid. Please click the "change grid" button again');
    } else if(userInput != parseInt(userInput)) {
        alert('Input was not a number. Please click the "change grid" button again');
    } else {
        gridContainerDiv.innerHTML = '';
        creatingGrid(userInput);
        creatingHoverEffect();
    }
});