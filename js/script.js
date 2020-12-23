let pos = 0;
let wh = slide.offsetWidth;
console.log(container.style.backgroundPositionX);

Hammer(slide).on('swiperight', (e)=>{
    pos -= wh;

    container.style.backgroundPositionX = pos + "px";
    console.log(typeof slide.offsetWidth , wh);
    console.log(pos);
    console.log(container.style.backgroundPositionX);
})
Hammer(slide).on('swipeleft', (e)=>{
    pos += wh;
    container.style.backgroundPositionX = 30 + "px";
    console.log(typeof slide.offsetWidth , wh);
    console.log(pos);
    console.log(container.style.backgroundPositionX);
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
