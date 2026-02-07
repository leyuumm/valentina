// Create subtle floating particles
function createParticle() {
    const colors = ['#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'];
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '0';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Create particles periodically
setInterval(createParticle, 200);

// Initial burst
for (let i = 0; i < 20; i++) {
    setTimeout(createParticle, i * 100);
}
