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
    if(currentPositionBg < (Math.abs(e.deltaX) * 100/ sizeBgContainer)){
        currentPositionBg = 0;
    }
    else{
        currentPositionBg = currentPositionBg - (Math.abs(e.deltaX) * 100/ sizeBgContainer);
    }
    



    console.log(Math.abs(e.deltaX) * 100/ sizeBgContainer);
    console.log(currentPositionBg);
    console.log(sizeBgContainer);


  if (currentPositionBg >= 0) {
    container.style.backgroundPositionX = currentPositionBg + "%";
  } else {
    currentPositionBg = 0;
  }
});
Hammer(container).on("swipeleft", (e) => {
    currentPositionBg = currentPositionBg + (Math.abs(e.deltaX) * 100/ sizeBgContainer);
  if (currentPositionBg <= 100) {
    container.style.backgroundPositionX = currentPositionBg + "%";
  } else {
    currentPositionBg = 100;
  }
  console.log(Math.abs(e.deltaX) * 100/ sizeBgContainer);
    console.log(currentPositionBg);
    console.log(sizeBgContainer);

});

// if (window.DeviceOrientationEvent) {
//     window.addEventListener("deviceorientation", function (event) {
//         tilt([event.beta, event.gamma]);
//         console.log(event.gamma);
//     }, true);
// } else if (window.DeviceMotionEvent) {
//     window.addEventListener('devicemotion', function (event) {
//         tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
//     }, true);
// } else {
//     window.addEventListener("MozOrientation", function (orientation) {
//         tilt([orientation.x * 50, orientation.y * 50]);
//     }, true);
// }

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
//         return setResult('DeviceOrientationEvent not detected')
//     }
//     if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
//         return setResult('DeviceOrientationEvent.requestPermission not detected')
//     } else {
//         $('.button_test_api').css({ 'display': 'flex' });
//     }
// }

// function setResult(result) {

// }

// if (!window.DeviceOrientationEvent) {

// } else {
//     testDeviceOrientation();
//     var deltaFixX = null;
//     var x1 = 0;
//     window.addEventListener('deviceorientation', function(event) {
//         detected = true;

//         if (detected) {

//             var promise = FULLTILT.getDeviceOrientation({ 'type': 'game' });

//             promise.then(function(orientationControl) {

//                 orientationControl.listen(function() {

//                     var euler;

//                     switch (currentControlType) {
//                         case 1:
//                             euler = orientationControl.getLastRawEventData();
//                             break;
//                         default:
//                             euler = orientationControl.getScreenAdjustedEuler();
//                     }
//                     if (euler.beta > 85 && euler.beta < 95) {
//                         return;
//                     }
//                     var tiltX = euler.gamma*-1;
//                     // $('#debug').html(tiltX+'<br>'+$('#debug').html().substr(0,100));
//                     var thresholdX=40;
//                     var deltaX=tiltX;
//                     if (deltaFixX==null) {
//                         deltaFixX=tiltX-thresholdX/2;
//                     }
//                     x = (deltaX - deltaFixX)/thresholdX;
//                     if (x > 1) {
//                          x = 1;
//                          deltaFixX = deltaX-thresholdX;
//                     }
//                     if (x < 0) {
//                          x = 0;
//                          deltaFixX = deltaX;
//                     }
//                     x=1-x;
//                     x=Math.round(x*100)/100;
//                     if (Math.abs(x1-x)>0.025) {
//                         $('.screen').css({transform: 'translate3d(' + 66*(x-0.5) + '%,0,0)'})
//                         // $('#debug').html(Math.round(tiltX*100)/100+' '+Math.round(x*100)/100+'<br>'+$('#debug').html().substr(0,100));
//                         x1=x;
//                     }
//                     // if(-15<tiltX && tiltX<15) {
//                         // $('#debug').html(x+'<br>'+$('#debug').html().substr(0,100));
//                         // var $panorama=$('#ad-viewport');
//                         // var $panorama_img=$panorama.find('.screen');
//                         // var pan_width=$panorama.outerWidth();
//                         // var img_width=$panorama_img.outerWidth();
//                         // var pos=x*(pan_width - img_width);
//                     //	 // TweenMax.to($panorama_img, 1.5, {
//                     //	 //	 x: pos,
//                     //	 // });
//                         // $('.screen').css({transform: 'translate3d(0%,0,0) translateX(-50%)'});
//                         // $('#debug').html(x+' '+'<br>'+$('#debug').html().substr(0,100));
//                         // x1=x;
//                     // } else if(-90<tiltX && tiltX<-30) {
//                     // 	$('.screen').css({transform: 'translate3d(33.3333%,0,0) translateX(-50%)'});
//                     // } else if(30<tiltX && tiltX<90) {
//                     // 	$('.screen').css({transform: 'translate3d(-33.3333%,0,0) translateX(-50%)'});
//                     // }
//                     // else if(60<tiltX) {
//                     //	 $('.screen').css({transform: 'translate3d(-33.3333%,0,0) translateX(-50%)'});
//                     // }

//                 });
//             });
//         }
//     });

// }
