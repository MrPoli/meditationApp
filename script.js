const audio = document.querySelector("audio");
const counterSection = document.querySelector(".counter-section__controls");
const counterSectionPlay = document.querySelector(
  ".counter-section__controls--play"
);
const counterSectionPause = document.querySelector(
  ".counter-section__controls--pause"
);
const twoMinutesBtn = document.querySelector(".time__btn--two-minutes");
const fiveMinutesBtn = document.querySelector(".time__btn--five-minutes");
const tenMinutesBtn = document.querySelector(".time__btn--ten-minutes");
let countdownNumbers = document.querySelector(
  ".counter-section__countdown-numbers"
);
let countdownTime = 0;
let countdownInterval;

let countdownIntervalStart = () => {
  countdownTime == 0
    ? clearInterval(countdownInterval)
    : (countdownInterval = setInterval(countdown, 1000));
};

let countdownIntervalReset = () => {
  countdownTime = parseInt(countdownNumbers.textContent) * 60;
  audio.pause();
  audio.currentTime = 0;
  clearInterval(countdownInterval);
  counterSectionPlay.classList.remove("hidden");
  counterSectionPause.classList.add("hidden");
  return countdownTime;
};

twoMinutesBtn.addEventListener("click", () => {
  countdownNumbers.innerHTML = "2:00";
  countdownIntervalReset();
});

fiveMinutesBtn.addEventListener("click", () => {
  countdownNumbers.innerHTML = "5:00";
  countdownIntervalReset();
});
tenMinutesBtn.addEventListener("click", () => {
  countdownNumbers.innerHTML = "10:00";
  countdownIntervalReset();
});

counterSectionPlay.addEventListener("click", () => {
  countdownTime == 0 ? audio.pause() : audio.play();
  if (audio.played) {
    counterSectionPlay.classList.toggle("hidden");
    counterSectionPause.classList.toggle("hidden");
  }
  countdownIntervalStart();
});

counterSectionPause.addEventListener("click", () => {
  audio.pause();
  counterSectionPlay.classList.toggle("hidden");
  counterSectionPause.classList.toggle("hidden");
  clearInterval(countdownInterval);
});

let countdown = () => {
  const minutes = Math.floor((countdownTime - 1) / 60);
  let seconds = (countdownTime - 1) % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownNumbers.innerHTML = `${minutes}:${seconds}`;
  countdownTime--;
  console.log(countdownTime);
};
