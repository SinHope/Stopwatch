window.onload = function () {

var seconds = 00;
var tens = 00;
var appendSeconds = $("#seconds")
var appendTens = $("#tens")
var buttonStart = $('#buttonstart');
var buttonStop = $('#buttonreset');
var buttonReset = $('#buttonreset');
var interval;

buttonStart.click = function () {
  clearInterval(Interval);
  Interval = setInterval(Interval, 10);
}

buttonStop.click = function () {
  clearInterval(Interval);
}

buttonReset.click = function () {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.html = tens;
  appendSeconds.html = seconds;
}

function startTimer () {
  tens++;
    if(tens <= 9) {
      appendTens.html = "0" + tens;
    }
    if(tens > 9) {
      appendTens.html = tens;
    }
    if(tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.html = "0" + seconds;
      tens = 0;
      appendTens.html = "0" + 0;
    }
    if(seconds > 9){
      sppendSeconds.html = seconds;
    }
}
}
