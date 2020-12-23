let pos = 0;
let i = +window
  .getComputedStyle(container)
  .getPropertyValue("background-position")
  .split("%")[0];


let wh = i/2;
let wcont = i;
container.style.backgroundPositionX = i + "%";

console.log(i);
Hammer(container).on("swiperight", (e) => {
  wcont -= wh;
  if(wcont >= 0){
    container.style.backgroundPositionX = wcont + "%";
  }
  else{
    wcont = 0;
  }
});
Hammer(container).on("swipeleft", (e) => {
  wcont += wh;
  if(wcont <= i ){
    container.style.backgroundPositionX = wcont + "%";
  }
  else{
    wcont = i;
  }
});

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function (event) {
        tilt([event.beta, event.gamma]);
        console.log(event.gamma);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function (event) {
        tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
    }, true);
} else {
    window.addEventListener("MozOrientation", function (orientation) {
        tilt([orientation.x * 50, orientation.y * 50]);
    }, true);
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

text__btn.addEventListener("click", () => {
  slider__popup.style.display = "flex";
});
popup__close.addEventListener("click", () => {
  slider__popup.style.display = "none";
});
