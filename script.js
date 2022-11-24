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

function togglePlay() {
  return audio.paused ? audio.play() : audio.pause();
}

twoMinutesBtn.addEventListener("click", () => {
  countdownNumbers.innerHTML = "2:00";
  countdownTime = parseInt(countdownNumbers.textContent) * 60;
});
fiveMinutesBtn.addEventListener("click", () => {
  countdownNumbers.innerHTML = "5:00";
  countdownTime = parseInt(countdownNumbers.textContent) * 60;
});
tenMinutesBtn.addEventListener("click", () => {
  countdownNumbers.innerHTML = "10:00";
  countdownTime = parseInt(countdownNumbers.textContent) * 60;
});

counterSection.addEventListener("click", () => {
  togglePlay();
  counterSectionPlay.classList.toggle("hidden");
  counterSectionPause.classList.toggle("hidden");
  setInterval(countdown, 1000);
});

let countdown = () => {
  const minutes = Math.floor((countdownTime - 1) / 60);
  let seconds = (countdownTime - 1) % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownNumbers.innerHTML = `${minutes}:${seconds}`;
  countdownTime--;
  console.log(countdownTime);
};
