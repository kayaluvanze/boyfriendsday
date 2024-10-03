document.addEventListener('DOMContentLoaded', () => {
    const fallingHearts = document.querySelector('.falling-hearts');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖'; // Pink heart emoji
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random fall speed
        heart.style.fontSize = Math.random() * 20 + 10 + 'px'; // Random size
        heart.style.transform = `rotate(${Math.random() * 360}deg)`; // Random rotation
        fallingHearts.appendChild(heart);

        // Remove the heart after it falls off the screen
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create a new heart every 300ms
    setInterval(createHeart, 300);
});
