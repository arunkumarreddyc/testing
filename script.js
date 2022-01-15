let display = document.querySelector("#result");
let buttons = document.querySelectorAll("td");
let displayValue = "";
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
      displayValue = 1 / 100;
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
