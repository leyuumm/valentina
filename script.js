// Initialize EmailJS with your public key
// You need to sign up at https://www.emailjs.com/ and replace 'YOUR_PUBLIC_KEY' with your actual public key
emailjs.init('5SkJMK46w5JvL1KGh'); // Replace with your EmailJS public key

// Function to create falling lily animation
function createFallingFlowers() {
    const fallingContainer = document.getElementById('fallingAnimation');
    
    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('falling-flower');
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDelay = `${Math.random() * 5}s`;
        flower.style.animationDuration = `${6 + Math.random() * 4}s`;
        fallingContainer.appendChild(flower);
        
        // Remove the flower after animation completes
        setTimeout(() => {
            if (flower.parentNode) {
                flower.parentNode.removeChild(flower);
            }
        }, 10000);
    }
    
    // Create flowers continuously
    setInterval(createFlower, 800);
    
    // Create initial batch
    for (let i = 0; i < 10; i++) {
        setTimeout(createFlower, i * 200);
    }
}

// Start falling animation when page loads
document.addEventListener('DOMContentLoaded', createFallingFlowers);

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const pleadingText = document.getElementById('pleadingText');

let noClickCount = 0;
let yesBtnScale = 1;

const pleadingMessages = [
    "Wait wait wait... think about this!",
    "Are you SURE about that?",
    "Come on, don't do me like this 😭",
    "My heart just cracked a little...",
    "Really? REALLY?!",
    "I see how it is... *dramatically sighs*",
    "You're really gonna make me do this huh?",
    "Okay fine, I'll just make YES bigger then!",
    "This is your last warning... 😤",
    "I'm not above begging. Please? 🙏",
    "The NO button is getting smaller, you notice that right?",
    "You're really testing my patience here...",
    "FINE. NO button = GONE. Just say yes already! 😤"
];

// Make NO button try to run away on hover (after 1 click)
noBtn.addEventListener('mouseenter', () => {
    if (noClickCount >= 1 && noClickCount < 8) {
        // Add shake effect
        noBtn.classList.add('scared');
        setTimeout(() => noBtn.classList.remove('scared'), 500);
        
        const maxX = 60;
        const maxY = 40;
        const randomX = (Math.random() - 0.5) * maxX;
        const randomY = (Math.random() - 0.5) * maxY;
        
        noBtn.style.transition = 'all 0.2s ease';
        noBtn.style.position = 'relative';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }
});

// When NO button is clicked
noBtn.addEventListener('click', () => {
    noClickCount++;
        // Change the GIF
    const mainGif = document.getElementById('mainGif');
    if (mainGif) {
        const gif = mainGif.querySelector('.reaction-gif');
        const gifIndex = Math.min(noClickCount - 1, gifUrls.length - 1);
        gif.src = gifUrls[gifIndex];
    }
        // Increase YES button size dramatically
    yesBtnScale += 0.4;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
    
    // Show pleading message
    const messageIndex = Math.min(noClickCount - 1, pleadingMessages.length - 1);
    pleadingText.textContent = pleadingMessages[messageIndex];
    
    // Make NO button run away (move to random position) after 2 clicks
    if (noClickCount >= 2 && noClickCount <= 7) {
        const buttonContainer = document.querySelector('.button-container');
        const containerRect = buttonContainer.getBoundingClientRect();
        
        // Random position within the container
        const maxX = 50;
        const maxY = 30;
        const randomX = (Math.random() - 0.5) * maxX;
        const randomY = (Math.random() - 0.5) * maxY;
        
        noBtn.style.transition = 'all 0.3s ease';
        noBtn.style.position = 'relative';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }
    
    // After certain clicks, make NO button smaller and harder to click
    if (noClickCount > 4) {
        const newSize = Math.max(0.3, 1 - (noClickCount - 4) * 0.2);
        noBtn.style.transform = `scale(${newSize})`;
    }
    
    // After many clicks, hide the NO button completely
    if (noClickCount > 8) {
        noBtn.classList.add('hidden');
        pleadingText.textContent = "Ha! The NO button is gone! Now you HAVE to say yes! 😏";
    }
});

// When YES button is clicked
yesBtn.addEventListener('click', async () => {
    // Disable both buttons to prevent multiple clicks
    yesBtn.disabled = true;
    noBtn.disabled = true;
    
    // Change the UI
    pleadingText.innerHTML = '<div class="loading"></div> Sending notifications...';
    
    // Get her answers from the game
    const sliderAnswer = sessionStorage.getItem('sliderAnswer') || 'She skipped the game';
    const noClicks = noClickCount;
    
    // Create a funny summary based on her behavior
    let behaviorNote = '';
    if (noClicks === 0) {
        behaviorNote = '\\n- Didn\'t even hesitate! Said YES immediately! 😍';
    } else if (noClicks <= 2) {
        behaviorNote = '\\n- Clicked NO a couple times just to tease you 😏';
    } else if (noClicks <= 5) {
        behaviorNote = '\\n- Really made you work for it! 😅';
    } else if (noClicks <= 8) {
        behaviorNote = '\\n- WOW she really tested your patience! 😂';
    } else {
        behaviorNote = '\\n- LEGEND STATUS: Made you hide the NO button! 🤣';
    }
    
    try {
        // Send email to her
        await emailjs.send('service_vk4bhkq', 'template_j76846p', {
            to_email: 'lliamkhenzomonleon@gmail.com',
            to_name: 'Valentina',
            message: 'You accepted Lliam Khenzo to be your Valentina!',
            subject: 'You Said YES!'
        });
        
        // Send email to you with her answers
        await emailjs.send('service_vk4bhkq', 'template_j76846p', {
            to_email: 'monleonkhenz@gmail.com',
            to_name: 'Lliam Khenzo',
            message: `YESSSS SHE SAID YESS HEHEHEHE\n\nHer Answers:\n- "How much do you like Lliam?" (1-10): ${sliderAnswer}\n- Times she clicked NO before saying YES: ${noClicks}\n\n(She tried ${noClicks} times to escape but couldn't resist!)`,
            subject: 'SHE SAID YES!!!'
        });
        
        // Redirect to success page
        setTimeout(() => {
            window.location.href = 'accepted.html';
        }, 1000);
        
    } catch (error) {
        console.error('Email error:', error);
        // Even if email fails, still show success page
        pleadingText.textContent = 'Success!';
        setTimeout(() => {
            window.location.href = 'accepted.html';
        }, 1000);
    }
});
