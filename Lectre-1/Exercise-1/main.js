document.addEventListener("DOMContentLoaded", (event) => {
  let numberInput = document.getElementById("input");
  let answerElement = document.getElementById("answer");
  let convertButton = document.getElementById("convert-button");

  convertButton.addEventListener("click", handleConvertClick);

  function handleConvertClick() {
    let decimalValue = numberInput.value;
    if (/^\d+$/.test(decimalValue)) {
      let binary = "";
      while (decimalValue > 0) {
        binary = (decimalValue % 2) + binary;
        decimalValue = Math.floor(decimalValue / 2);
      }
      answerElement.textContent = "anser: " + binary;
    } else {
      answerElement.textContent = "please enter only numbets";
    }
  }
});
