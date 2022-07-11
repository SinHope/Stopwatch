console.log("hello");












var seconds = 00;
var tens = 00;
var appendSeconds = document.getElementById("seconds");
var appendTens = document.getElementById("tens");
var buttonStart = document.getElementById("buttonstart");
var buttonStop = document.getElementById("buttonstop");
var buttonReset = document.getElementById("buttonreset");
var Interval;

buttonStart.addEventListener("click", function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);

});

buttonStop.addEventListener("click", function () {
  clearInterval(Interval);
});

buttonReset.addEventListener("click", function () {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
});

function startTimer () {
  tens++;
    if(tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9) {
      appendTens.innerHTML = tens;
    }
    if(tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
      sppendSeconds.innerHTML = seconds;
    }
}
