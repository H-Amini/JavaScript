var number1, number2;
var opera;
function addToCalculator(value) {
  if (value != "+" && value != "-" && value != "/" && value != "*") {
    if (opera == null) {
      number1 = +(document.getElementById("number1").value += value);
    } else {
      number2 = +(document.getElementById("number2").value += value);
    }
  } else {
    opera = value;
  }
}

function finilize() {
  switch (opera) {
    case "*":
      document.getElementById("result").value = number1 * number2;
      opera = null;
      break;
    case "/":
      document.getElementById("result").value = number1 / number2;
      opera = null;
      break;
    case "+":
      document.getElementById("result").value = number1 + number2;
      opera = null;
      break;
    case "-":
      document.getElementById("result").value = number1 - number2;
      opera = null;
      break;

    default:
      alert("error");
      break;
  }
}
