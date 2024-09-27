const ORIGINAL_ALERT = window.alert;
const ORIGINAL_CONFIRM = window.confirm;
const ORIGINAL_PROMPT = window.prompt;

let isCustomAlertRunning = false;

window.alert = function (message) {
  if (isCustomAlertRunning) {
    return ORIGINAL_ALERT(message);
  }

  isCustomAlertRunning = true;

  ORIGINAL_CONFIRM();
  ORIGINAL_PROMPT();
  ORIGINAL_ALERT(message);
  ORIGINAL_CONFIRM();
  ORIGINAL_PROMPT();

  isCustomAlertRunning = false;
};

window.confirm = function (message) {
  return ORIGINAL_CONFIRM(message);
};

window.prompt = function (message, defaultValue) {
  return ORIGINAL_PROMPT(message, defaultValue);
};
