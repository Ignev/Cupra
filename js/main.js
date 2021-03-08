let canvas;
let ctx;

let canvasW;
let canvasH;

let carWidth;
let carHeight;

let scrollSpeed = 0.0;
let posX = -2100;
let scaleRatio = 1;

const COORDINATES = {
  x:0, y:0, s:0
};

let car = new Image();


let lights = new Image();

let nn_path = "";


let lightsX = 1265;
let lightsY = 213;
let lightsAlpha = 0;
let scrollMin = 0;
let scrollMax = 0;

let n = 0;

let wheels = new Array();
let wheelIndex = 0;

let swipeSpeed = 0;


let drag;
let showDisks = false;


function drawStuff(detectState) {

  if (detectState != undefined) {
    scrollSpeed = detectState;
  }
  posX = posX + scrollSpeed;

}

function redrawScene() {

  ctx.clearRect(0, 0, canvasW, canvasH);

  posX = posX + swipeSpeed;
  swipeSpeed = swipeSpeed * 0.99;

  scrollMin = (340 * scaleRatio) - canvasW / 2;
  scrollMax = (1585 * scaleRatio) - canvasW / 2;

  if (posX > -scrollMin) {
    posX = -scrollMin;
    swipeSpeed = 0;
  }
  if (posX < -scrollMax) {
    posX = -scrollMax;
    swipeSpeed = 0;
  }

  ctx.drawImage(car, posX, 0, carWidth, carHeight);

  if (n > 90*5 && n<90*7){
    lightsAlpha = (1.0 + Math.cos(Math.PI * n / 90)) / 2.0;
  }
  n++;

  ctx.save();
  ctx.globalAlpha = lightsAlpha;
  ctx.drawImage(lights,posX+lightsX*scaleRatio,lightsY*scaleRatio,lights.width*scaleRatio,lights.height*scaleRatio);

  ctx.restore();

  if (showDisks) {
    ctx.drawImage(wheels[wheelIndex], posX + 336 * scaleRatio, 446 * scaleRatio, wheels[wheelIndex].width * scaleRatio, wheels[wheelIndex].height * scaleRatio);
  }



  window.requestAnimationFrame(redrawScene);
}

function preload(path) {
  nn_path = path;
  canvas = document.getElementById('car');
  ctx = canvas.getContext('2d');

  car.onload = loadDone;
  car.src = nn_path+"images/man.png";

  const options = {
    listener: canvas,
    multiplier: 1
  };

  drag = new Drag(options);

  drag.on(event => {
    swipeSpeed = event.X;
  });

}

function loadDone(){

  if (showDisks) {
    for (var i = 0; i < 8; i++) {
      let img = new Image();
      img.src = nn_path + "images/w" + i + ".png";
      wheels[i] = img;
    }
  }

  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
  drawStuff();
  testDeviceOrientation();
  setTimeout(() => document.getElementById('help_icon').style.display = "none", 3000);
}

function testDeviceOrientation() {
  if (typeof DeviceOrientationEvent !== 'function') {
    return setResult('DeviceOrientationEvent not detected')
  }
  if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
    return setResult('DeviceOrientationEvent.requestPermission not detected')
  }
  document.getElementById('button_test_api').style.display="flex";
  document.getElementById('button_test_api').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    DeviceOrientationEvent.requestPermission().then(function(result) {
      document.getElementById('button_test_api').style.display = "none";
      return setResult(result);
    });
  });
}

function setResult(result) {
  main();
}

function main(){

  document.addEventListener('swiped-left', function(e) {
  });

  document.addEventListener('swiped-right', function(e) {
  });


    let TILT_LIMIT = 30;
    let halfScreenWidth = canvasW / 2;
    let halfScreenHeight = canvasH / 2;
    let initialBeta;


    let controlTypes = ['FULLTILT DeviceOrientation', 'Raw DeviceOrientation'];
    let currentControlType = 0;

    let deltaFixX = null;
    let x1 = 0;

    let promise = FULLTILT.getDeviceOrientation({'type': 'game'});

    promise.then(function (orientationControl) {

      orientationControl.listen(function () {

        let euler;

        switch (currentControlType) {
          case 1: 
            euler = orientationControl.getLastRawEventData();
            break;
          default: 
            euler = orientationControl.getScreenAdjustedEuler();
            break;
        }

        if (euler.beta > 85 && euler.beta < 95) {
          return;
        }

        let tiltX = euler.gamma;

        drawStuff(tiltX);

      });

    });

  window.requestAnimationFrame(redrawScene);
  if (showDisks) {
    let timerId = setInterval(() => wheelIndex = (wheelIndex + 1) % 8, 2000);
  }
} 

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvasW = canvas.width;
  canvasH = canvas.height;

  scaleRatio = canvasH/car.height;
  carWidth = car.width*scaleRatio;
  carHeight = canvasH;

  console.log("canvas width = "+canvasW,"canvas height = "+canvasH);
  redrawScene();
}

