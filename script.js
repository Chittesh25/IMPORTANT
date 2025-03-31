function showForgiveMessage() {
    const forgiveMessage = document.getElementById('forgiveMessage');
    forgiveMessage.classList.remove('hidden');
    
    // Create confetti effect
    createConfetti();
}

function createConfetti() {
    let confettiAmount = 20;
    for (let i = 0; i < confettiAmount; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);

        // Randomize position and animation delay
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.animationDelay = `${Math.random() * 1}s`;
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 1500);
    }
}
