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
  test.innerHTML = currentPositionBg + " " + Math.floor(e.gamma);
});
Hammer(container).on("swipeleft", (e) => {
  currentPositionBg =
    currentPositionBg + (Math.abs(e.deltaX) * 100 * 1.5) / sizeBgContainer;
  if (currentPositionBg <= 100) {
    container.style.backgroundPositionX = currentPositionBg + "%";
  } else {
    currentPositionBg = 100;
  }
  test.innerHTML = currentPositionBg + " " + Math.floor(e.gamma);
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

if (!window.DeviceMotionEvent) {
  
} else {
  window.addEventListener('devicemotion', function(event) {
    window.addEventListener('deviceorientation', function(e){
      let speen = event.rotationRate.gamma;
    if(speen < 0){
      currentPositionBg += e.gamma;
    }
    else{
      currentPositionBg -= e.gamma;
    }

    if(currentPositionBg >= 100){
      currentPositionBg = 100;
    }
    else if(currentPositionBg < 0){
      currentPositionBg = 0;
    }
    else if(currentPositionBg  == 0){
      currentPositionBg = positionBgContainer;
    }
    else{
      container.style.backgroundPositionX = currentPositionBg + "%";
    }


     test.innerHTML = Math.floor(currentPositionBg) + " " + Math.floor(e.gamma) + " " + Math.floor(speen) + " " + "7" ;
    })
    
     
  });
}
