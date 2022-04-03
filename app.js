// Create a reference to the display container that will hold all the tiles
const display = document.querySelector(".display");

// Define the grid size
let gridSize = 20;

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

// Add a tile child element to the display for each grid spot
for (let i = 0; i < gridSize; i++) {
  const row = createRow();
  for (let k = 0; k < gridSize; k++) {
    const tile = createTile();
    row.appendChild(tile);
  }
  display.appendChild(row)
}

