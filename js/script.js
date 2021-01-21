window.addEventListener("DOMContentLoaded", () => {
  // Fix bug resize smartphone

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  // Popup

  text__btn.addEventListener("click", () => {
    content__popup.style.display = "flex";
    console.log(1);
  });
  popup__close.addEventListener("click", () => {
    content__popup.style.display = "none";
  });

  // Swape
  let sizeBgContainer = bg.offsetWidth;
  bg.style.right = -(bg.offsetWidth/100) * 15 + "px";
  let currentPosition = -(sizeBgContainer/100) * 15;
  console.log(currentPosition);
  console.log(sizeBgContainer);
  Hammer(content).on("panright", (e) => {
    
    if(currentPosition <= -(sizeBgContainer - (sizeBgContainer/100) * 35)){
      currentPosition = -(sizeBgContainer - (sizeBgContainer/100) * 35);
    }
    else{
        currentPosition -= (Math.abs(e.deltaX) * 100 * 2) / sizeBgContainer;
    }
    if(+bg.style.right.split("px")[0] <= -(sizeBgContainer - (sizeBgContainer/100) * 35)){
      bg.style.right = `${-(sizeBgContainer - (sizeBgContainer/100) * 35)}px`;
    }
    else{
      bg.style.right = `${currentPosition}px`;
    }
    console.log(currentPosition);
    console.log(+bg.style.right.split("px")[0]);
  });

  Hammer(content).on("panleft", (e) => {
    if(currentPosition >= 0){
      currentPosition = 0;
    }
      else{
        currentPosition += (Math.abs(e.deltaX) * 100 *2 )/sizeBgContainer;
      }
    
    if(+bg.style.right.split("px")[0] >= 0){
      bg.style.right = `${0}px`;
    }
    else{
      bg.style.right = `${currentPosition}px`;
    }
    console.log(currentPosition);
  });

  // Gyroscope

  var TILT_LIMIT = 30;
  var initialBeta;
  var controlTypes = ['FULLTILT DeviceOrientation', 'Raw DeviceOrientation'];
  var currentControlType = 0;

  if(!window.DeviceOrientationEvent){
    
  }
  else{
    testDeviceOrientation();
		var deltaFixX = null;
		var x1 = 0;
		window.addEventListener('deviceorientation', function(event) {
			detected = true;
			
			if (detected) {
				var promise = FULLTILT.getDeviceOrientation({ 'type': 'game' });

				promise.then(function(orientationControl) {

					orientationControl.listen(function() {

						var euler;
						
						switch (currentControlType) {
							case 1:
								euler = orientationControl.getLastRawEventData();
								break;
							default:
								euler = orientationControl.getScreenAdjustedEuler();
						}
						if (euler.beta > 85 && euler.beta < 95) {
							return;
						}
						var tiltX = euler.gamma*-1;
						var thresholdX=40;
						var deltaX=tiltX;
						if (deltaFixX==null) {
							deltaFixX=tiltX-thresholdX/2;
						}
						var x = (deltaX - deltaFixX)/thresholdX;
						if (x > 1) {
							 x = 1;
							 deltaFixX = deltaX-thresholdX;
						}
						if (x < 0) {
							 x = 0;
							 deltaFixX = deltaX;
						}
						x=1-x;
						x=Math.round(x*100)/100;
						if (Math.abs(x1-x)>0.025) {
              bg.style.right = `${66*(x-0.5)}px`;
							x1=x;
						}

					});
				});
			}
		});
  }

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
