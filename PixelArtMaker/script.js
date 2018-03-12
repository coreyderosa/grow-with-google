$(document).ready(function () {
  /** Disable create button by default **/
  $("#create-id").prop("disabled", true);

  /** Disable clear button by default **/
  $("#clear-id").prop("disabled", true);

  getColorDisplayHex();

});

/*
Enable create button if both row and
col inputs have value, and if row is the last
value collected
*/
function rowEnableCreate() {
  let rowInput = $("#rows-id").val();
  let colInput = $("#cols-id").val();
  if (rowInput > 0 && colInput > 0) {
    $("#create-id").prop("disabled", false);
  }
};

/*
Enable create button if both row and
col inputs have value, and if column is the last
value collected
*/
function colEnableCreate() {
  let rowInput = $("#rows-id").val();
  let colInput = $("#cols-id").val();
  if (rowInput > 0 && colInput > 0) {
    $("#create-id").prop("disabled", false);
  }
};

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

/** Make the grid function **/
$("#create-id").click(function makeGrid() {
  // get number of rows and columns from input
  const rows = $("#rows-id").val();
  const cols = $("#cols-id").val();

  if (rows > 0 && cols >= 0) {
    /** Disable create button by default **/
    $("#create-id").prop("disabled", false);
  }

  // make the rows
  for (var h = 0; h < rows; h++) {
    $("#grid-id table").append("<tr></tr>");
  }

  // make the columns which completes the cell
  for (var w = 0; w < cols; w++) {
    $("#grid-id table tr")
      .append("<td id='grid-lines' onclick='colorTheCell(this)'></td>");
  }

  // Disable the create button
  $("#create-id").prop("disabled", true);

  // Enable the clear button
  $("#clear-id").prop("disabled", false);
});


/** Clear the grid function **/
$("#clear-id").click(function clearGrid() {
  // set row and column inputs to zero
  $("#rows-id").val(0);
  $("#cols-id").val(0);

  // empty cell of any text which displays the placeholder
  document.getElementById("cols-id").value = "";
  document.getElementById("rows-id").value = "";

  // remove the table
  $("#table-id").children().remove();

  // Disable the clear button
  $("#clear-id").prop("disabled", true);

  // Enable the create button
  $("#create-id").prop("disabled", false);
});