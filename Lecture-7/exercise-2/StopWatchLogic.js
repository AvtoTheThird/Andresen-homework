document.addEventListener('DOMContentLoaded', () => {
  const START_STOP_BUTTON = document.getElementById('stopwatch_start_stop_button');
  const RESET_BUTTON = document.getElementById('stopwatch_reset_button');
  const TIME_DISPLAY = document.getElementById('time');

  let isRunning = false;
  let timeValue = 0;
  let intervalId;

  function secoundsToTime(secounds) {
    const minutes = Math.floor(secounds / 60);
    const seconds = secounds % 60;

    return `${minutes}:${seconds}`;
  }

  function handleStartStopClick() {
    if (isRunning) {
      clearInterval(intervalId);
      START_STOP_BUTTON.textContent = 'Start';
    } else {
      intervalId = setInterval(() => {
        timeValue++;
        TIME_DISPLAY.innerText = secoundsToTime(timeValue);
      }, 1000);

      START_STOP_BUTTON.textContent = 'Stop';
    }

    isRunning = !isRunning;
  }

  function handleResetClick() {
    clearInterval(intervalId);
    isRunning = false;
    timeValue = 0;
    TIME_DISPLAY.innerText = secoundsToTime(timeValue);
    START_STOP_BUTTON.textContent = 'Start';
  }

  START_STOP_BUTTON.addEventListener('click', handleStartStopClick);
  RESET_BUTTON.addEventListener('click', handleResetClick);
});
