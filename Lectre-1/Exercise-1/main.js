document.addEventListener("DOMContentLoaded", (event) => {
  const NUMBER_INPUT = document.getElementById("input");
  const ANSWER_ELEMENT = document.getElementById("answer");
  const CONVERT_BUTTON = document.getElementById("convert-button");

  CONVERT_BUTTON.addEventListener("click", handleConvertClick);

  function handleConvertClick() {
    let decimalValue = NUMBER_INPUT.value;

    if (decimalValue.trim() === "" || !/^\d+$/.test(decimalValue)) {
      let binary = "";

      while (decimalValue > 0) {
        binary = (decimalValue % 2) + binary;
        decimalValue = Math.floor(decimalValue / 2);
      }

      ANSWER_ELEMENT.textContent = "anser: " + binary;
    } else {
      ANSWER_ELEMENT.textContent = "Please enter a valid positive number.";
    }
  }
});
