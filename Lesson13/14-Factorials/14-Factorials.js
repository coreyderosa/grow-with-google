var solution = 1;

for (var x = 1; x <= 12; x++) {
  solution *= x;
}
console.log(solution);


var solution = 12;

for (var x = 12; x > 1; x--) {
  solution = solution * (x - 1);
}
console.log(solution);