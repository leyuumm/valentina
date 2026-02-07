# Will You Be My Valentina?

An interactive Valentine's Day website featuring a mini-game, background music, and a playful "Will you be my Valentina?" prompt.

## Overview

A three-page static website built with HTML, CSS, and JavaScript. Includes falling flower animations, an embedded audio track (Mario - Let Me Love You), and email notifications via EmailJS.

## Pages

- **Landing Page** (`landing.html`) — Slider game asking "How much do you like Lliam?" with dynamic responses.
- **Main Page** (`index.html`) — "Will You Be My Valentina?" prompt with growing Yes button and shrinking No button.
- **Accepted Page** (`accepted.html`) — Celebration page displayed after accepting.

## Features

- Interactive slider game with personalized responses
- Background music that plays on user interaction
- Falling flower animations across all pages
- Growing Yes button / shrinking No button mechanic
- Email notifications sent to both parties on acceptance
- Mobile-optimized layout (iPhone 11)

## Setup

### 1. Configure EmailJS

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service and create a template with variables: `to_email`, `to_name`, `message`, `subject`
3. Update `script.js` with your credentials:

```javascript
emailjs.init('YOUR_PUBLIC_KEY');
// Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' in both emailjs.send() calls
```

### 2. Deploy

Push all files to a GitHub repository and enable GitHub Pages under Settings > Pages.

The entry point is `landing.html`.

## File Structure

```
landing.html          Landing page
landing-style.css     Landing page styles
landing-script.js     Slider game logic

index.html            Main question page
style.css             Main page styles
script.js             Button logic and email integration

accepted.html         Celebration page
accepted-style.css    Celebration page styles
accepted-script.js    Celebration animations

song.mp3              Background music
```

## License

This project is for personal use.
