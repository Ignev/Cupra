let pos = 0;
let positionBgContainer = +window
  .getComputedStyle(container)
  .getPropertyValue("background-position")
  .split("%")[0];
let sizeBgContainer = +window
  .getComputedStyle(container)
  .getPropertyValue("background-size")
  .split("px")[0];

let offsetSizeBg = positionBgContainer / 2;
let currentPositionBg = positionBgContainer;
container.style.backgroundPositionX = positionBgContainer + "%";

console.log(currentPositionBg);

console.log(positionBgContainer);
Hammer(container).on("swiperight", (e) => {
  if (currentPositionBg < (Math.abs(e.deltaX) * 100) * 2 / sizeBgContainer) {
    currentPositionBg = 0;
  } else {
    currentPositionBg =
      currentPositionBg - (Math.abs(e.deltaX) * 100) * 2 / sizeBgContainer;
  }

  if (currentPositionBg >= 0) {
    container.style.backgroundPositionX = currentPositionBg + "%";
  } else {
    currentPositionBg = 0;
  }
});
Hammer(container).on("swipeleft", (e) => {
  currentPositionBg =
    currentPositionBg + (Math.abs(e.deltaX) * 100 * 2) / sizeBgContainer;
  if (currentPositionBg <= 110) {
    container.style.backgroundPositionX = currentPositionBg + "%";
  } else {
    currentPositionBg = 100;
  }
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

text__btn.addEventListener("click", () => {
  slider__popup.style.display = "flex";
});
popup__close.addEventListener("click", () => {
  slider__popup.style.display = "none";
});

// function testDeviceOrientation() {
//     if (typeof DeviceOrientationEvent !== 'function') {
//         console.log('DeviceOrientationEvent not detected')
//     }
//     if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
//         console.log('DeviceOrientationEvent.requestPermission not detected')
//     }
// }
// testDeviceOrientation();

if (typeof DeviceOrientationEvent === "function") {
  console.log("Orientation is not supported");
  window.addEventListener(
    "deviceorientation",
    (e) => {
      let horPos = e.gamma;
    },
    false
  );
} else {
  console.log("DeviceOrientation is supported");
  window.addEventListener(
    "deviceorientation",
    (e) => {
      let horPos = e.gamma;
    },
    false
  );
}
