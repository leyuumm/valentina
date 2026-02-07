const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
const submitBtn = document.getElementById('submitBtn');
const gameSection = document.getElementById('gameSection');
const questionBox = document.querySelector('.question-box');
const responseBox = document.getElementById('responseBox');
const responseText = document.getElementById('responseText');
const continueBtn = document.getElementById('continueBtn');

// Update slider value display
slider.addEventListener('input', (e) => {
    sliderValue.textContent = e.target.value;
});

// Handle submit
submitBtn.addEventListener('click', () => {
    const value = parseInt(slider.value);
    const gifContainer = document.getElementById('gifContainer');
    const gif = gifContainer.querySelector('.reaction-gif');
    
    // Store the answer so we can include it in the email later
    sessionStorage.setItem('sliderAnswer', value);
    
    let response = '';
    let gifUrl = '';
    
    if (value === 1) {
        response = "ONE?!<br><br>Okay that's just rude. I'm hurt. But I'll win you over...";
        gifUrl = "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif"; // dramatic crying
    } else if (value === 2) {
        response = "A 2??<br><br>I'm not crying, YOU'RE crying! Watch me change your mind...";
        gifUrl = "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif"; // baby crying
    } else if (value === 3) {
        response = "THREE out of TEN?!<br><br>Alright, challenge accepted. Let's see if I can bump that up...";
        gifUrl = "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif"; // shocked
    } else if (value === 4) {
        response = "A 4? Below average?<br><br>That hurts more than stepping on a Lego...";
        gifUrl = "https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif"; // sad cat
    } else if (value === 5) {
        response = "Right in the middle huh? Playing it safe?<br><br>Let me try to get that number higher...";
        gifUrl = "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"; // thinking
    } else if (value === 6) {
        response = "A 6? I'll take it but...<br><br>I know I can get you to a 10 eventually!";
        gifUrl = "https://media.giphy.com/media/a5viI92PAF89q/giphy.gif"; // hmm okay
    } else if (value === 7) {
        response = "Lucky number 7! Not bad!<br><br>But we're aiming for 10 here...";
        gifUrl = "https://media.giphy.com/media/9V8You0A1G64JmiBUi/giphy.gif"; // not bad nod
    } else if (value === 8) {
        response = "An 8! Now we're talking!<br><br>Let's see if I can get those last 2 points...";
        gifUrl = "https://media.giphy.com/media/3oEjHV0z8S7WM4MwnK/giphy.gif"; // happy dance
    } else if (value === 9) {
        response = "A 9?! So close to perfect!<br><br>What do I need to do to get that 10?";
        gifUrl = "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"; // excited
    } else {
        response = "A PERFECT 10?!<br><br>Okay I wasn't expecting that... you just made my day!";
        gifUrl = "https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif"; // celebration
    }
    
    // Change the GIF
    gif.src = gifUrl;
    
    // Hide question, show response
    questionBox.style.display = 'none';
    responseBox.classList.remove('hidden');
    responseText.innerHTML = response;
});

// Continue to main question
continueBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});
