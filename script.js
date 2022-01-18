let display = document.querySelector("#result");
let buttons = document.querySelectorAll("td");
let displayValue = "";
const excludedKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (but of buttons) {
  but.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      displayValue += buttonText;
      display.value = displayValue;
    } else if (buttonText == "DEL") {
      displayValue = displayValue.substring(0, displayValue.length - 1);
      display.value = displayValue;
    } else if (buttonText == "%") {
      displayValue = (display.value )* (1 / 100);
      display.value = displayValue;
    } else if (buttonText == "C") {
      displayValue = "";
      display.value = displayValue;
    } else if (buttonText == "=") {
      display.value = eval(displayValue);
    } else {
      displayValue += buttonText;
      display.value = displayValue;
    }
  });
}

display.addEventListener("keydown", (e) => {
  console.log(e);
  if (
    !(
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      excludedKeys.includes(e.keyCode)
    )
  ) {
    alert("Only numbers are allowed");
    e.preventDefault();
  }
});
