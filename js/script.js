let currentPosition = -50;

// Swipe

const swipe = () => {
  Hammer(content).on("panright", (e) => {
    if (currentPosition <= -270) {
      currentPosition = -270;
    } else {
      currentPosition -= 5;
    }
    if (+bg.style.right.split("%")[0] <= -270) {
      bg.style.right = `${-270}%`;
    } else {
      bg.style.right = `${currentPosition}%`;
    }
    console.log(currentPosition);
    console.log(+bg.style.right.split("%")[0]);
  });

  Hammer(content).on("panleft", (e) => {
    if (currentPosition >= 0) {
      currentPosition = 0;
    } else {
      currentPosition += 5;
    }

    if (+bg.style.right.split("%")[0] >= 0) {
      bg.style.right = `${0}%`;
    } else {
      bg.style.right = `${currentPosition}%`;
    }
    console.log(currentPosition);
  });
};

// Fix bug resize smartphone

const resize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
};

// Popup

const popup = () => {
  text__btn.addEventListener("click", () => {
    content__popup.style.display = "flex";
    console.log(1);
  });
  popup__close.addEventListener("click", () => {
    content__popup.style.display = "none";
  });
};

// Gyroscope

const gyroscope = (e) => {
  var ag = e.accelerationIncludingGravity;
  if (ag.x < 0) {
    if (currentPosition <= -270) {
      currentPosition = -270;
    } else {
      currentPosition -= 5;
    }
    if (+bg.style.right.split("%")[0] <= -270) {
      bg.style.right = `${-270}%`;
    } else {
      bg.style.right = `${currentPosition}%`;
    }
    console.log(currentPosition);
    console.log(+bg.style.right.split("%")[0]);
  } else if (ag.x > 0) {
    if (currentPosition >= 0) {
      currentPosition = 0;
    } else {
      currentPosition += 5;
    }

    if (+bg.style.right.split("%")[0] >= 0) {
      bg.style.right = `${0}%`;
    } else {
      bg.style.right = `${currentPosition}%`;
    }
    console.log(currentPosition);
  }
};

// Test Gyroscope

function onClick() {
  // feature detect
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    DeviceMotionEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          window.addEventListener("devicemotion", gyroscope, true);
        }
      })
      .catch(console.error);
  } else {
    window.addEventListener("devicemotion", gyroscope, true);
  }
}

function setResult(result) {
  gyroscope();
}

window.addEventListener("DOMContentLoaded", () => {
  resize();
  popup();
  swipe();
  document.addEventListener("click", onClick);
});

//   let pos = 0;
//   let positionBgContainer = +window
//     .getComputedStyle(container)
//     .getPropertyValue("background-position")
//     .split("%")[0];
//   let sizeBgContainer = +window
//     .getComputedStyle(container)
//     .getPropertyValue("background-size")
//     .split("px")[0];
//   console.log(sizeBgContainer);
//   let offsetSizeBg = positionBgContainer / 2;
//   let currentPositionBg = positionBgContainer;
//   container.style.backgroundPositionX = positionBgContainer + "%";
//   console.log(currentPositionBg);
//   Hammer(container).on("panright", (e) => {
//     if (currentPositionBg < (Math.abs(e.deltaX) * 100 * 2) / sizeBgContainer) {
//       currentPositionBg = 0;
//     } else {
//       currentPositionBg =
//         currentPositionBg - (Math.abs(e.deltaX/2) * 100) / sizeBgContainer;
//     }

//     if (currentPositionBg >= 0) {
//       container.style.backgroundPositionX = currentPositionBg + "%";
//     } else {
//       currentPositionBg = 0;
//     }
//     console.log(currentPositionBg, 2);
//   });
//   Hammer(container).on("panleft", (e) => {
//     currentPositionBg =
//       currentPositionBg + (Math.abs(e.deltaX/2) * 100) / sizeBgContainer;
//     if (currentPositionBg < 100) {
//       container.style.backgroundPositionX = currentPositionBg + "%";
//     } else {
//       currentPositionBg = 100;
//     }
//     console.log(currentPositionBg, 1);
//   });

// let speed;
//   setTimeout(() => {
//     if (!window.DeviceMotionEvent) {
//       console.log("error");
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
//           let deg = a/3500;
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
//   console.log(3);
//     window.addEventListener("devicemotion", function (event) {
//       window.addEventListener("deviceorientation", function (e) {

//         let a;
//         if(e.gamma >= 10){
//           a = 10;
//         }
//         else if(e.gamma <= -10){
//           a = -10;
//         }
//         else{
//           a = e.gamma
//         }
//         let deg = a/3500;
//         speed = event.rotationRate.gamma;
//         if (speed < 0) {
//           currentPositionBg -= deg;
//         } else {
//           currentPositionBg += deg;
//         }

//         if (currentPosition <= -(sizeBgContainer - (sizeBgContainer/100) * 35)) {
//           currentPositionBg = 100;
//         } else if (currentPositionBg < 0) {
//           currentPositionBg = 0;
//         } else {
//           bg.style.right = `${currentPositionBg}px`;
//         }
//       });
//     });
//   }
// }, 1000);
