window.addEventListener("DOMContentLoaded", () => {
  let pos = 0;
  let positionBgContainer = +window
    .getComputedStyle(container)
    .getPropertyValue("background-position")
    .split("%")[0];
  let sizeBgContainer = +window
    .getComputedStyle(container)
    .getPropertyValue("background-size")
    .split("px")[0];
  console.log(sizeBgContainer);
  let offsetSizeBg = positionBgContainer / 2;
  let currentPositionBg = positionBgContainer;
  container.style.backgroundPositionX = positionBgContainer + "%";

  Hammer(container).on("panright", (e) => {
    if (currentPositionBg < (Math.abs(e.deltaX) * 100 * 2) / sizeBgContainer) {
      currentPositionBg = 0;
    } else {
      currentPositionBg =
        currentPositionBg - (Math.abs(e.deltaX/2) * 100) / sizeBgContainer;
    }

    if (currentPositionBg >= 0) {
      container.style.backgroundPositionX = currentPositionBg + "%";
    } else {
      currentPositionBg = 0;
    }
  });
  Hammer(container).on("panleft", (e) => {
    currentPositionBg =
      currentPositionBg + (Math.abs(e.deltaX/2) * 100 * 2) / sizeBgContainer;
    if (currentPositionBg <= 100) {
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

//   let speed;
//   setTimeout(() => {
//     if (!window.DeviceMotionEvent) {
//     } else {
//       window.addEventListener("devicemotion", function (event) {
//         window.addEventListener("deviceorientation", function (e) {
//           let a;
//           if(e.gamma >= 10){
//             a = 10;
//           }
//           else if(e.gamma <= -10){
//             a = -10;
//           }
//           else{
//             a = e.gamma
//           }
//           let deg = a/3000;
//           // test.innerHTML = `54 ${Math.floor(deg)} ${Math.floor(currentPositionBg)} ${Math.floor(speed)}`;
//           speed = event.rotationRate.gamma;
//           if (speed < 0) {
//             currentPositionBg -= deg;
//           } else {
//             currentPositionBg += deg;
//           }
  
//           if (currentPositionBg >= 100) {
//             currentPositionBg = 100;
//           } else if (currentPositionBg < 0) {
//             currentPositionBg = 0;
//           } else {
//             container.style.backgroundPositionX = currentPositionBg + "%";
//           }
//         });
//       });
//     }
//   }, 1000);
});


// let l = (sizeBgContainer * e.gamma) / 180;
//           let deg = (Math.abs(l) * 100 * 2) / sizeBgContainer;
//           speed = event.rotationRate.gamma;
//           test.innerHTML = `40 ${currentPositionBg} ${l} ${deg}`;
//           if (speed < 0) {
//             currentPositionBg -= deg;
//           } else {
//             currentPositionBg += deg;
//           }
//           if (currentPositionBg >= 100) {
//             currentPositionBg = 100;
//           } else if (currentPositionBg < 0) {
//             currentPositionBg = 0;
//           } else if (e.gamma == 0) {
//             container.style.backgroundPositionX = positionBgContainer + "%";
//           } else {
//             container.style.backgroundPositionX = currentPositionBg + "%";
//           }