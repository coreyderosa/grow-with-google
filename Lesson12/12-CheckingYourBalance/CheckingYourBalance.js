var balance = 0;
var isActive = true;
var checkBalance = true;

if (checkBalance === false) {
  console.log("Thank you. Have a nice day!");
} else {
  if (isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
  } else {
    if (isActive === false) {
      console.log("Your account is no longer active.");
    } else {
      if (balance === 0) {
        console.log("Your account is empty.");
      } else {
        console.log("Your balance is negative. Please contact bank.");
      }
    }
  }
}