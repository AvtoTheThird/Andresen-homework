document.addEventListener("DOMContentLoaded", (event) => {
  // this logs 'true true' because !![] is truthy and [] become '' adn whole
  // expression turns into  <true + '' + true> which outputs 'true true'
  console.log(!![] + [] + !![]);
});
