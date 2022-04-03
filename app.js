// Create a reference to the display container that will hold all the tiles
const display = document.querySelector(".display");

// Define the grid size
let gridSize = 16;

// Create a function that creates an individual tile element with class="tile"
function createTile() {
  const tile = document.createElement("div");
  tile.setAttribute("class", "tile");
  tile.style.width = `${100 / gridSize}%`;
  return tile;
}

// Create a function to build a row
function createRow() {
  const row = document.createElement("div");
  row.setAttribute("class", "row");
  row.style.height = `${100 / gridSize}%`;
  return row;
}

// Add a function that adds a tile child element to the display for each grid spot
function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    const row = createRow();
    for (let k = 0; k < gridSize; k++) {
      const tile = createTile();
      row.appendChild(tile);
    }
    display.appendChild(row)
  }
  // Add the "active" class to any tile when hovered over with mouse
  function setActive(e) {
    e.target.classList.add("active");
  }
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach(t => t.addEventListener("mouseover", setActive));
}

// Render a grid on page load
createGrid();

// Define the onclick function for a button that removes the current grid, and builds a clean one using current gridSize
function resetGrid() {
  // Remove current tiles from display
  const rows = document.querySelectorAll(".row");
  rows.forEach(row => row.remove());
  createGrid();
}

// Link resetGrid function to the reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);