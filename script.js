const viewer = document.getElementById("burgerViewer");

document.getElementById("arBtn")
.addEventListener("click", () => {
  viewer.activateAR();
});

document.getElementById("pauseBtn")
.addEventListener("click", () => {
  viewer.autoRotate = !viewer.autoRotate;
});

document.getElementById("resetBtn")
.addEventListener("click", () => {
  viewer.cameraOrbit = "0deg 75deg 100%";
});