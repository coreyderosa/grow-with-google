var time = 60;

while (time >= 0) {
  if (time === 50) {
    console.log("Orbiter transfers from ground to internal power");
    time = time - 1;
  } else if (time === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
    time = time - 1;
  } else if (time === 16) {
    console.log("Activate launch pad sound suppression system");
    time = time - 1;
  } else if (time === 10) {
    console.log("Activate main engine hydrogen burnoff system");
    time = time - 1;
  } else if (time === 6) {
    console.log("Main engine start");
    time = time - 1;
  } else if (time === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
    time = time - 1;
  } else {
    console.log("T-" + time + " seconds");
    time = time - 1;
  }
}