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

// gsap.from('.box1', {
//     y: -200,
//     duration: 2,
//     ease: 'linear',
//     repeat: -1,
//     yoyo: true
// })


// gsap.fromTo('.box2', {
//     y: 200,
//     opacity: 0
// }, {
//     opacity: 1,
//     y: -200,
//     duration: 3,
//     ease: 'linear',
//     borderRadius: 0,
//     repeat: -1
// });


// stagger


// gsap.set('.box', {
//     borderRadius: 0,
// })

// gsap.to('.box', {
//     borderRadius: 100,
//     duration: 2,
//     y: -100,
//     repeat: -1,
//     yoyo: true,
//     stagger: {
//         amount: 10,
//         ease: 0.5,
//         from: 'random'
//     }
// })

// const play = document.querySelector('.play')
// const pause = document.querySelector('.pause')
// const restart = document.querySelector('.restart')

// const tweek = gsap.to('.box', {
//     y: -150,
//     background: 'red',
//     duration: 3,
//     repeat: -1,
//     yoyo: true,
//     ease: 'linear'
// })

// play.addEventListener('click', () => tweek.play())
// pause.addEventListener('click', () => tweek.pause())
// restart.addEventListener('click', () => tweek.restart());





//timelines:

// let tl = gsap.timeline({
//     defaults: {
//         duration: 2,
//     }
// });

// tl.to('.box1', {
//     scale: 0,
//     opacity: 0,
//     delay: 1,

// }).to('.box2', {

//     x: -100
// }).to('.box1', {

//     scale: 1,
//     opacity: 1,
//     background: 'crimson'
// })
// const textElement = document.querySelector('h1');

// Split text into individual characters
// const chars = textElement.innerText.split('');
// textElement.innerHTML = chars.map(char => `<span class="char">${char}</span>`).join('');

// // Select all `.char` elements
// const charElements = document.querySelectorAll('h1 .char');
// console.log(charElements); // Logs all span elements wrapping individual characters

// // GSAP Animation: Animate each letter
// gsap.to(charElements, {
//     y: 0
// })

// gsap.to(charElements, {
//     y: 50, // Letters start below
//     stagger: {
//         amount: 2,       // Total stagger duration
//         from: 'start'   // Stagger animation in random order
//     },
//     ease: "power1.out", // Easing effect for smoother animation
//     duration: 1,
//     delay: 1   // Duration of each animation
// });
