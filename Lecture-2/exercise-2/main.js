const originalAlert = window.alert;
const originalConfirm = window.confirm;
const originalPrompt = window.prompt;

let isCustomAlertRunning = false;

window.alert = function (message) {
  if (isCustomAlertRunning) {
    return originalAlert(message);
  }

  isCustomAlertRunning = true;

  originalConfirm();
  originalPrompt();
  originalAlert(message);
  originalConfirm();
  originalPrompt();

  isCustomAlertRunning = false;
};

window.confirm = function (message) {
  return originalConfirm(message);
};

window.prompt = function (message, defaultValue) {
  return originalPrompt(message, defaultValue);
};
