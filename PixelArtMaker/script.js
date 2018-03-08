var colorWellHexValue = document.getElementById("color-well-id").value;
document.getElementById("color-value-id").innerHTML = colorWellHexValue;

function colorWellValue() {
  var colorWellHexValue = document.getElementById("color-well-id").value;
  document.getElementById("color-value-id").style.backgroundColor = colorWellHexValue;
}


/** Add color-well color to a clicked cell **/
function colorTheCell(cell) {
  var colorWellHexValue = document.getElementById("color-well-id").value;
  cell.style.backgroundColor = colorWellHexValue;
}

/** Disable clear button by default **/
$("#clear-id").prop("disabled", true);


/** Make the grid function **/
$("#create-id").click(function makeGrid() {
  // get number of rows and columns from input
  var rows = $("#rows-id").val();
  var cols = $("#cols-id").val();

  // make the rows
  for (var h = 0; h < rows; h++) {
    $("#grid-id table").append("<tr></tr>");
  }

  // make the columns which completes the cell
  for (var w = 0; w < cols; w++) {
    $("#grid-id table tr")
      .append("<td id='grid-lines' onmouseover='colorTheCell(this)'></td>");
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