// window.addEventListener('DOMContentLoaded', () => {
//     // const moveBackground = () => {
    
//     // }
//     // const swipe = () => {
//     //     slide.addEventListener('mouse', ()=> {

//     //     })
//     // }
    
// })
// slide.addEventListener('click', () => {
//     let pos = slide.style.backgroundPositionX;
//     slide.removeAttribute("style");
//     pos -= 230;
    
// })
// slide.addEventListener("mousedown", () => {
//     slide.addEventListener('mousemove', (e)=> {
//         slide.style.backgroundPositionX = -230 + "px";
//         if(slide.style.backgroundPositionX == "-230px")
//         {
//             slide.style.backgroundPositionX = -100 + "px";
//         }
        
//         console.log(15);
//     })
    
//   });

text__btn.addEventListener('click', () => {
    slider__popup.style.display = "flex";
})
popup__close.addEventListener('click', () => {
    slider__popup.style.display = "none";
})