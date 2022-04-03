// Create a reference to the display container that will hold all the tiles
const display = document.querySelector(".display");

// Create a function that creates an individual tile element with class="tile"
function createTile() {
  const tile = document.createElement("div");
  tile.setAttribute("class", "tile");
  return tile;
}

// Define the grid size
let gridSize = 16;

// Add a tile child element to the display for each grid spot
const grid = [];
for (let i = 0; i < (gridSize * gridSize); i++) {
  const tile = createTile();
  grid.push(tile);
}
grid.forEach(x => display.appendChild(x));

