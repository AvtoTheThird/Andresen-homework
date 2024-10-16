document.addEventListener("DOMContentLoaded", () => {
  const BODY = document.querySelector("body");
  const BUTTON = document.querySelector("button");

  function hoverHandler() {
    if (Math.random() < 0.5) {
      BODY.style.left = Math.floor(Math.random() * (95 - 1) + 1) + "%";
      BODY.style.top = Math.floor(Math.random() * (95 - 1) + 1) + "%";
    }
  }
  function clickHandler() {
    BODY.style.left = Math.floor(Math.random() * (95 - 1) + 1) + "%";
    BODY.style.top = Math.floor(Math.random() * (95 - 1) + 1) + "%";
  }
  BUTTON.addEventListener("mouseover", hoverHandler);
  BUTTON.addEventListener("click", clickHandler);
});
