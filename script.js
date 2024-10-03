document.addEventListener('DOMContentLoaded', () => {
    const fallingHearts = document.querySelector('.falling-hearts');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖'; // Pink heart emoji
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.fontSize = Math.random() * 10 + 20 + 'px';
        fallingHearts.appendChild(heart);

        // Remove the heart after it falls off the screen
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create a new heart every 300ms
    setInterval(createHeart, 300);
});
