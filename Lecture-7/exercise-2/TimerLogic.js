TIME_DISPLAYdocument.addEventListener('DOMContentLoaded', () => {
  const TIME_DISPLAY = document.getElementById('timer_time');
  const TIME_INPUT = document.getElementById('time_input');
  const THIRTY_SECOUND_BUTTON = document.getElementById('30s_button');
  const ONE_MINUTE_BUTTON = document.getElementById('1min_button');
  const FIVE_MINUTE_BUTTON = document.getElementById('5min_button');
  const START_STOP_BUTTON = document.getElementById('timer_start_stop_button');
  const RESET_BUTTON = document.getElementById('timer_reset_button');

  let isCountingDown = false;
  let time;
  let intervalId;

  function secoundsToTime(secounds) {
    const minutes = Math.floor(secounds / 60);
    const seconds = secounds % 60;

    return `${minutes}:${seconds}`;
  }

  function handleStartStopClick() {
    if (isCountingDown) {
      TIME_INPUT.disabled = false;
      clearInterval(intervalId);
      isCountingDown = false;
      START_STOP_BUTTON.textContent = 'Start';
    } else {
      TIME_INPUT.disabled = true;
      isCountingDown = true;
      START_STOP_BUTTON.textContent = 'Stop';
      time = Number(TIME_INPUT.value);
      TIME_DISPLAY.textContent = secoundsToTime(time);
      intervalId = setInterval(countDown, 1000);
    }
  }

  function countDown() {
    if (time > 0) {
      time--;
      TIME_DISPLAY.textContent = secoundsToTime(time);
    } else {
      clearInterval(intervalId);
      isCountingDown = false;
      TIME_INPUT.disabled = false;
      START_STOP_BUTTON.textContent = 'Start';
    }
  }

  function handle30SecondsClick() {
    TIME_INPUT.value = Number(TIME_INPUT.value) + 30;
  }

  function handle1MinuteClick() {
    TIME_INPUT.value = Number(TIME_INPUT.value) + 60;
  }

  function handle5MinutesClick() {
    TIME_INPUT.value = Number(TIME_INPUT.value) + 300;
  }

  function resetTimer() {
    clearInterval(intervalId);
    TIME_DISPLAY.textContent = '0:0';
    time = 0;
    TIME_INPUT.value = 0;
    isCountingDown = false;
    START_STOP_BUTTON.textContent = 'Start';
    TIME_INPUT.disabled = false;
  }

  START_STOP_BUTTON.addEventListener('click', handleStartStopClick);
  RESET_BUTTON.addEventListener('click', resetTimer);
  THIRTY_SECOUND_BUTTON.addEventListener('click', handle30SecondsClick);
  ONE_MINUTE_BUTTON.addEventListener('click', handle1MinuteClick);
  FIVE_MINUTE_BUTTON.addEventListener('click', handle5MinutesClick);
});
