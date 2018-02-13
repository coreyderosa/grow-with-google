function laugh(num) {
  var laughs = "ha";
  var repeat = "";
  for (var i = 0; i < num; i++) {
    repeat = repeat + laughs;
  }
  return repeat + "!";
}

console.log(laugh(5));