window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".fireworks");
  const fireworks = new Fireworks.default(container, {
    brightness: { min: 20, max: 80 },
    traceLength: 3,
    traceSpeed: 5,
    explosionRadius: 50,
    autoresize: true,
    sound: true,
  });
  fireworks.start();
  const boom = new Audio("boom1.mp3");
  document.addEventListener(
    "click",
    () => {
      boom.currentTime = 0;
      boom.play();
    },
    { once: true }
  );
  //fireworks.stop();
});
const snow = document.getElementById("snow");
for (let i = 0; i < 300; i++) {
  const flake = document.createElement("div");
  flake.style.background = 'url("fl.png") center/contain no-repeat';
  flake.style.width = "15px";
  flake.style.height = "15px";
  flake.style.display = "block";
  flake.style.backgroundSize = "cover";
  flake.style.opacity = Math.random() * 0.3 + 0.4;
  flake.style.left = Math.random() * 100 + "%";
  flake.style.top = Math.random() * -100 - 20 + "px";
  flake.style.animationDuration = Math.random() * 5 + 5 + "s";
  flake.style.animationDelay = Math.random() * 5 + "s";
  snow.appendChild(flake);
}
