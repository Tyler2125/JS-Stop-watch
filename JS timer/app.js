let tens = 00;
let seconds = 00;

let miliSeconds = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
function Start() {
  tens++;
  if (tens < 9) {
    miliSeconds.innerHTML = "0" + tens; //adds a milisecond each time ran
  }
  if (tens > 9) {
    miliSeconds.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
function countDown() {
  const timerInterval = setInterval(Start, 10); // runs the function start every milisecond
  stopBtn.addEventListener("click", () => {
    //stop functionality
    clearInterval(timerInterval);
  });
  resetBtn.addEventListener("click", () => {
    // reset functionality
    if (miliSeconds != 0) {
      clearInterval(timerInterval);
      miliSeconds.innerHTML = "00";
      seconds.innerHTML = "00";
    }
    if (seconds != 0) {
      seconds = 00;
      appendSeconds.innerHTML = "00";
    }
  });
}
