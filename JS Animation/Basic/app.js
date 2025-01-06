// Fade in 
console.log(gsap)

gsap.set('.box1', {
    y: 200,
    opacity: 0
})

gsap.to(".box1", {
    y: 0,
    opacity: 1,
    duration: 2,
    repeat: -1,
    yoyo: true,
})

gsap.set('.box2', {
    opacity: 0.2,
    scale: 0.2
})

gsap.to('.box2', {
    opacity: 1,
    scale: 1,
    duration: 2,
    repeat: -1,
    yoyo: true,
})
gsap.set('.box-3', {
    x: 0,
    width: 0,
    opacity: 0,
})

gsap.to('.box-3', {
    x: -50,
    width: "50%",
    opacity: 1,
    duration: 2,
    repeat: -1,
})

const container = document.querySelector('.particle-container');
const particleCount = 100; // Number of particles
const particles = [];

const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

// Create particles dynamically
for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * containerWidth}px`;
    particle.style.top = `${Math.random() * containerHeight}px`;
    container.appendChild(particle);
    particles.push(particle);
}
// Function to animate a particle with random movement
function moveParticle(particle) {
    const container = document.querySelector('.particle-container');

    const randomX = Math.random() * window.innerWidth;
    particles.forEach((particle) => {
        const randomDuration = Math.random() * 2 + 1; // Random duration between 1-3 seconds
        const randomX = Math.random() * (containerWidth); // Random X position within bounds
        const randomY = Math.random() * (containerHeight); // Random Y position within bounds

        gsap.to(particle, {
            x: randomX,
            y: randomY,
            duration: randomDuration,
            ease: "bounce.out", // Bounce effect
            repeat: -1, // Infinite bouncing
            yoyo: true, // Reverse direction
            delay: Math.random(), // Stagger start time
        });
    })
}

// Start animations for all particles
// particles.forEach(moveParticle);



