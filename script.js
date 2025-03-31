// Get the elements
const forgiveButton = document.getElementById('forgiveButton');
const thankYouMessage = document.getElementById('thankYouMessage');

// Add event listener to the forgive button
forgiveButton.addEventListener('click', () => {
    forgiveButton.style.display = 'none';  // Hide the button
    thankYouMessage.style.display = 'block';  // Show the "Thank you" message

    // Pop-up or animation after clicking (could be like confetti)
    animateConfetti();  // Call a function to animate confetti (next)
});

// Confetti animation (simplified version)
function animateConfetti() {
    let colors = ["#ff6f61", "#f44336", "#ffb6c1", "#ffd700", "#ff6347"];
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animation = 'fall 2s forwards';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// Keyframe for confetti fall animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    0% {
        opacity: 1;
        transform: translateY(-100vh);
    }
    100% {
        opacity: 0;
        transform: translateY(100vh);
    }
}
`;
document.head.appendChild(style);
