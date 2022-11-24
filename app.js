const audio = document.querySelector("audio");
const counterSection = document.querySelector(".counter-section__controls");
const counterSectionPlay = document.querySelector(
  ".counter-section__controls--play"
);
const counterSectionPause = document.querySelector(
  ".counter-section__controls--pause"
);

function togglePlay() {
  return audio.paused ? audio.play() : audio.pause();
}

counterSection.addEventListener("click", () => {
  togglePlay();
  counterSectionPlay.classList.toggle("hidden");
  counterSectionPause.classList.toggle("hidden");
});
