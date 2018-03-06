var colorWellHexValue = document.getElementById("color-well-id").value;
document.getElementById("color-value-id").innerHTML = colorWellHexValue;

function colorWellValue() {
  var colorWellHexValue = document.getElementById("color-well-id").value;
  document.getElementById("color-value-id").innerHTML = colorWellHexValue;
}

function maxLength(maxlength) {
  this.value = this.Value.slice(0, this.maxlength);
}

$("#submit-id").click(function () {
  var rows = $("#rows-id").val();
  var cols = $("#cols-id").val();
  var grid = "";
  // console.log("rows: " + rows);
  // console.log("columns: " + cols);
  for (var h = 0; h < rows; h++) {
    console.log(h);
    $("#grid-id table").append("<tr></tr>");
  }
  for (var w = 0; w < cols; w++) {
    console.log(w);
    $("#grid-id table tr").append("<td class='col-lines'></td>");
  }
  return;
});