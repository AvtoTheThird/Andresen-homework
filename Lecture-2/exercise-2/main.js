const ORIGINAL_ALERT = window.alert;

const ORIGINAL_CONFIRM = window.confirm;

const ORIGINAL_PROPMPT = window.prompt;

window.alert = function (message) {
  ORIGINAL_CONFIRM();
  ORIGINAL_PROPMPT();
  ORIGINAL_ALERT(message);
  ORIGINAL_CONFIRM();
  ORIGINAL_PROPMPT();
};

window.alert("Hello");
