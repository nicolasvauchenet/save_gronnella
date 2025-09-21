document.getElementById("year").textContent = new Date().getFullYear();
const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
document.documentElement.dataset.motion = mq.matches ? "reduce" : "ok";
