$(document).ready(function () {
  document.getElementById("rows-id").value = 20;
  document.getElementById("cols-id").value = 20;
  getColorDisplayHex();
});

/** Show color and hex value once user selects color **/
function getColorDisplayHex() {
  let colorWellHexValue = document.getElementById("color-well-id").value;
  document.getElementById("color-value-id").style.backgroundColor = colorWellHexValue;
  document.getElementById("color-value-id").innerHTML = colorWellHexValue;
};


/** Add color-well color to a clicked cell **/
function colorTheCell(cell) {
  let colorWellHexValue = document.getElementById("color-well-id").value;
  cell.style.backgroundColor = colorWellHexValue;
}

/** Clear the canvas**/
$("#clear-drawing-id").click(function clearTheDrawing() {
  $("td").css("background-color", "rgb(219,219,219)");
});


/** Make the grid **/
$("#create-id").click(function makeGrid() {
  // get number of rows and columns from input
  const rows = $("#rows-id").val();
  const cols = $("#cols-id").val();

  // make the rows
  for (var h = 0; h < rows; h++) {
    $("#grid-id table").append("<tr></tr>");
  }

  // make the columns which completes the cell
  for (var w = 0; w < cols; w++) {
    $("#grid-id table tr")
      .append("<td id='grid-lines' onclick='colorTheCell(this)'></td>");
  }
});


/** Clear the grid **/
$("#clear-id").click(function clearGrid() {
  // set row and column inputs to zero
  $("#rows-id").val(0);
  $("#cols-id").val(0);

  // empty cell of any text which displays the placeholder
  document.getElementById("cols-id").value = "";
  document.getElementById("rows-id").value = "";

  // remove the table
  $("#table-id").children().remove();
});