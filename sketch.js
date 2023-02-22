let n_tiles = 10;
let size = 2000;
let tile_array = [];
let result;

let color_array = [
  "#011c26",
  "#005E72",
  "#089494",
  "#95D1BD",
  "#EAD8A7",
  "#EE9B00",
  "#CA6702",
  "#B83F01",
  "#AD2015",
  "#9D2227"
]

// Load table containing the graeco-latin square values
function preload() {
  table = loadTable('assets/gls_design.csv', 'csv', 'header');
}


function setup() {
  createCanvas(size, size);
  let tile_size = width / n_tiles;
  for (var i = 0; i < n_tiles; i++) {
    tile_array[i] = [];
    for (var j = 0; j < n_tiles; j++) {
      let tile_index = n_tiles * i + j + 1;

      // GLS values for arc and rect colors
      arc_value = int(table.getString(tile_index-1, 3));
      rect_value = int(table.getString(tile_index-1, 2));
      
      // Anchor point for the tile
      let x_location = i * tile_size;
      let y_location = j * tile_size;
      
      tile_array[i][j] = new Tile(
        x_location,
        y_location,
        tile_size,
        tile_index,
        color_array[rect_value],
        color_array[arc_value]
      );
    }
  }

  background(220);

  for (var i = 0; i < n_tiles; i++) {
    for (var j = 0; j < n_tiles; j++) {
      tile_array[i][j].draw();
    }
  }
  saveCanvas('graeco_latin_square', 'png');
}