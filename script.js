let timer = 10;
const countEL = document.querySelector("#count");
const countdown = document.querySelector(".countdown");
const audioEl = document.querySelector(".audio");
const containerEl = document.querySelector(".container");
countdown.addEventListener("click", function () {
  const timerEL = setInterval(function settimer() {
    countEL.innerHTML = timer;
    timer--;
    setInterval(function () {
      let colorIndex = Math.floor(Math.random() * 9);
      const color = [
        "Red",
        "green",
        "yello",
        "pink",
        "white",
        "brown",
        "blue",
        "purple",
        "orange",
      ];
      // console.log(colorIndex);
      containerEl.style.background = color[colorIndex];
    }, 100);

    if (timer === -2) {
      countEL.style.display = "none";
      countdown.classList.add("pros");
      audioEl.play();
    }
  }, 1000);
});

// setInterval(function () {
//   const color = [
//     "Red",
//     "green",
//     "yello",
//     "pink",
//     "white",
//     "brown",
//     "blue",
//     "purple",
//     "orange",
//   ];
//   const colorIndex = Math.floor(Math.random() * 9);
//   // console.log(colorIndex);
//   containerEl.style.background = color[colorIndex];
// }, 100);
