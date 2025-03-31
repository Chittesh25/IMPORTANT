document.getElementById("forgive-btn").addEventListener("click", function() {
    let message = document.getElementById("thank-you");
    message.classList.remove("hidden");
    message.classList.add("pop-animation");

    // Hide the button after clicking
    this.style.display = 'none';

    // Trigger confetti animation
    animateConfetti();
});

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

// Add keyframes dynamically for confetti animation
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
