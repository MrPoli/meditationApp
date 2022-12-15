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
const circle = document.querySelector("#circle");
const backgroundCircle = document.querySelector(
  ".counter-section--circle__svg circle"
);
let countdownTime = 0;
let countdownInterval;

let circleAnimationStart = () => {
  if (countdownTime > 0) {
    circle.style.animation = "countdownCircleTimer linear forwards";
    circle.style.animationDuration = countdownTime + "s";
  }
};

let circleAnimationPause = () => {
  circle.style.animationPlayState = "paused";
};

let circleAnimationRemove = () => {
  circle.style.animation = "";
  circle.style.animationDuration = "";
};

let countdownIntervalStart = () => {
  countdownTime == 0
    ? clearInterval(countdownInterval)
    : (countdownInterval = setInterval(countdown, 100));
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
  circleAnimationRemove();
  countdownNumbers.innerHTML = "2:00";
  countdownIntervalReset();
});

fiveMinutesBtn.addEventListener("click", () => {
  circleAnimationRemove();
  countdownNumbers.innerHTML = "5:00";
  countdownIntervalReset();
});
tenMinutesBtn.addEventListener("click", () => {
  circleAnimationRemove();
  countdownNumbers.innerHTML = "10:00";
  countdownIntervalReset();
});

counterSectionPlay.addEventListener("click", () => {
  if (countdownTime > 0) {
    audio.play();
    counterSectionPlay.classList.toggle("hidden");
    counterSectionPause.classList.toggle("hidden");
  } else {
    audio.pause();
    alert("Choose meditation time!");
  }
  countdownIntervalStart();
  circleAnimationStart();
});

counterSectionPause.addEventListener("click", () => {
  audio.pause();
  counterSectionPlay.classList.toggle("hidden");
  counterSectionPause.classList.toggle("hidden");
  circleAnimationPause();
  clearInterval(countdownInterval);
});

let countdown = () => {
  const minutes = Math.floor(countdownTime / 60);
  let seconds = Math.floor(countdownTime % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownNumbers.innerHTML = `${minutes}:${seconds}`;
  countdownTime -= 0.1;
  if (countdownTime <= 0) {
    clearInterval(countdownInterval);
    audio.pause();
    audio.currentTime = 0;
  }
};
