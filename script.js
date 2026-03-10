const countEL = document.querySelector("#count");
const countdown = document.querySelector(".countdown");
const audioEl = document.querySelector(".audio");
const messageEl = document.querySelector(".message");
const cakeEl = document.querySelector(".cake");
const bodyEl = document.querySelector("body");

let timer = 10;

countdown.addEventListener("click", function () {
  countdown.style.pointerEvents = "none";
  const timerEl = setInterval(function () {
    countEL.innerHTML = timer;
    timer--;
    if (timer < 0) {
      clearInterval(timerEl);
      countdown.style.display = "none";
      startParty();
    }
  }, 1000);
});

function startParty() {
  audioEl.play();
  cakeEl.style.display = "block";
  confetti({
    particleCount: 200,
    spread: 120,
  });
  typeMessage();
  setInterval(createBallon, 500);
}

function typeMessage() {
  const text = "🎉 Happy Birthday 🎂";
  let index = 0;
  const typing = setInterval(() => {
    messageEl.innerHTML += text[index];
    index++;
    if (index === text.length) {
      clearInterval(typing);
    }
  }, 100);
}

function createBallon() {
  const ballon = document.createElement("div");
  ballon.classList.add("ballon");
  ballon.style.left = Math.random() * window.innerWidth + "px";
  const colors = ["red", "blue", "yellow", "pink", "purple", "orange"];
  ballon.style.background = colors[Math.floor(Math.random() * colors.length)];
  bodyEl.appendChild(ballon);
  setTimeout(() => {
    ballon.remove();
  }, 6000);
}
