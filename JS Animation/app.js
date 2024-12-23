// console.log(gsap) - gsap obejct
// gsap.method(element , varsobj)


//to - where to

// gsap.to(".box", {
//     y: 100,
//     x: -100,
//     duration: 2,
//     repeat: 2
// })

//set method.
// gsap.set(".box", {
//     opacity: .6,
//     background: "red",
// });


// gsap.to(".box", {
//     opacity: 1,
//     background: "crimson",
//     y: 200,
//     duration: 5,
//     ease: "bounce.out",
//     repeat: -1,
//     yoyo: true
// });



// gsap.set(".box", {
//     opacity: .6,
//     background: "red",
// });


// gsap.to(".box", {
//     opacity: 1,
//     background: "crimson",
//     y: 200,
//     x: 100,
//     duration: 5,
//     ease: "bounce.out",
//     repeat: -1,
//     yoyo: true
// });

// gsap.to(".box1", {
//     opacity: 1,
//     background: "crimson",
//     y: 200,
//     x: 0,
//     duration: 5,
//     ease: "bounce.out",
//     repeat: -1,
//     yoyo: true
// });

// gsap.to(".box2", {
//     opacity: 1,
//     background: "crimson",
//     x: -100,
//     y: 200,
//     duration: 5,
//     ease: "bounce.out",
//     repeat: -1,
//     yoyo: true
// });

//from fromTo - you have to sepific devalut fale and new animation state.

gsap.from('.box1', {
    y: -200,
    duration: 2,
    ease: 'linear',
    repeat: -1,
    yoyo: true
})


gsap.fromTo('.box2', {
    y: 200,
    opacity: 0
}, {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: 'linear',
    borderRadius: 0,
    repeat: -1
})