// Create a reference to the display container that will hold all the rows
const display = document.querySelector(".display");
// Define the grid size
let gridSize = 16;
// Initialize a variable to track if the user is actively drawing
let isDrawing = false;
// Initialize a variable to track the currently selected colo
let currentColor = "black";
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
  // Define a function for adding a background color to a div
  function setTileColor(e) {
    e.target.style.backgroundColor = currentColor;
  }
  // Add the background color to tiles when drawing
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach(t => {
    // Starts drawing when mouse is clicked
    t.addEventListener("mousedown", e => {
      setTileColor(e);
      isDrawing = true;
    });
    // Continues drawing when mouse is clicked and dragged
    t.addEventListener("mousemove", e => {
      if (isDrawing) {
        setTileColor(e);
      }
    })
    // Stops drawing when click is released
    t.addEventListener("mouseup", e => {
      if (isDrawing) {
        setTileColor(e);
        isDrawing = false;
      }
    })
  });
}
// Define the onclick function for a button that removes the current grid, and builds a clean one using current gridSize
function resetGrid() {
  // Remove current tiles from display
  const rows = document.querySelectorAll(".row");
  rows.forEach(row => row.remove());
  // Render a new grid using the global gridSize variable
  createGrid();
}
// Link resetGrid function to the reset button
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetGrid);
// Define a function that updates the global gridSize variable and updates the DOM on changes
function updateGridSize(num) {
  gridSize = num;
  const gridSizeDisplay = document.querySelector(".gridsize");
  gridSizeDisplay.textContent = `${gridSize} x ${gridSize}`;
}
// Use the slider input element to update the gridSize variable
const slider = document.querySelector(".slider");
slider.oninput = e => {
  updateGridSize(e.target.value);
  resetGrid();
};
// Initialize a variable that stores all of the color options to draw with
const colors = ["black", "#ff0000", "#ff9900", "#ffff00", "#006600", "#00ff00", "#0000cc", "#6699ff", "#9900ff", "#ff3399", "white"];
// Initialize a variable that points to the "colorcontainer" div
const colorContainer = document.querySelector(".colorcontainer");
// Create divs with class "colorselector" and ids with the name of the color
colors.forEach(color => {
  const button = document.createElement("div");
  button.setAttribute("class", "colorselector");
  button.setAttribute("id", color);
  button.style.backgroundColor = color;
  colorContainer.appendChild(button);
})
// Define a function that sets the current color
function setCurrentColor(color) {
  currentColor = color;
}
// Set an event listener on each colorselector that updates the current color
document.querySelectorAll(".colorselector")
        .forEach(selector => selector.addEventListener("click", e => {
          setCurrentColor(e.target.id);
        }));
// Set an initial gridSize of 16 and render a grid on page load/refresh
updateGridSize(16);
createGrid();