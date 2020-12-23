let pos = 0;
let wh = slide.offsetWidth;
let wcont = -slide.offsetWidth*2
console.log(container.style.backgroundSize);
container.style.backgroundPositionX = -slide.offsetWidth*2 + "px";
Hammer(slide).on('swiperight', (e)=>{
    wcont += wh;
    if(wcont > 0){
        wcont = 0;
    }
    else{
        container.style.backgroundPositionX = wcont + "px";
    }
    console.log(1);
})
Hammer(slide).on('swipeleft', (e)=>{
    wcont -= wh;
    if(wcont < -slide.offsetWidth*2){
        wcont = -slide.offsetWidth*2;
    }
    else{
        container.style.backgroundPositionX = wcont + "px";
    }
   console.log(2);
})



// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

text__btn.addEventListener("click", () => {
  slider__popup.style.display = "flex";
});
popup__close.addEventListener("click", () => {
  slider__popup.style.display = "none";
});
