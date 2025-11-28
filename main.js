window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const fireworks = new Fireworks.default(container, {
    brightness: { min: 50, max: 80 },
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
