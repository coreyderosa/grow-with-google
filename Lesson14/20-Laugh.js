var laugh = function (num) {
  var ha = "ha";
  var repeat = ""; //blank string to store ha's
  for (var i = 0; i < num; i++) {
    repeat += ha;
  }

  return repeat + "!";
};

console.log(laugh(10));