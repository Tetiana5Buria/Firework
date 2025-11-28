import { Fireworks } from "fireworks-js";

const container = document.querySelector(".container");
const fireworks = new Fireworks(container, {
  brightness: { min: 50, max: 80 },
  traceLength: 3,
  traceSpeed: 5,
  explosionRadius: 50,
  autoresize: true,
});
fireworks.start();
const boom = new Audio("./dist/boom1.mp3");
boom.play();
window.addEventListener("click", () => {
  boom.currentTime = 0;
});

//fireworks.stop();
