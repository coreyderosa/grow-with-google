// returns a star to the console
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

// loops the makeLine function
// stores the each line of the triangle in tri
// returns tri which is entire triangle not just one line
function buildTriangle(num) {
  var tri = "";
  for (var i = 1; i <= num; i++) {
    tri = tri + makeLine(i);
  }
  return tri;
}

console.log(buildTriangle(10));