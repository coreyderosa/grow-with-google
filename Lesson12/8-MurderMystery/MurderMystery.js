var room = "dining room";
var weapon = "";
var suspect = "Mr. Parkes";
var solved = false;

function murderMystery(room, suspect) {
  "use strict";
  if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = true;
  } else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
  } else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
  } else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison";
    solved = true;
  } else {
    solved = false;
  }

  if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
  }
}

murderMystery(room, suspect);