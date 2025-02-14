document.addEventListener('DOMContentLoaded', function () {
    const bouncingImages = document.querySelectorAll('.bouncing');

    bouncingImages.forEach((image, index) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const imgSize = 100; // Adjust to match your image size
        const speed = Math.random() * 4 + 3; // Random speed between 3 and 7 seconds
        const delay = Math.random() * 2; // Random delay between 0 and 2 seconds

        const startX = Math.floor(Math.random() * (width - imgSize));
        const startY = Math.floor(Math.random() * (height - imgSize));
        const directionX = Math.random() > 0.5 ? 1 : -1;
        const directionY = Math.random() > 0.5 ? 1 : -1;

        // Apply initial position
        image.style.left = `${startX}px`;
        image.style.top = `${startY}px`;

        // Keyframes with easing (cubic-bezier for natural bounce effect)
        const keyframes = `
            @keyframes bounce${index} {
                0% { transform: translate(0, 0); }
                25% { transform: translate(${directionX * (width - imgSize) * 0.5}px, 0); }
                50% { transform: translate(${directionX * (width - imgSize) * 0.5}px, ${directionY * (height - imgSize) * 0.5}px); }
                75% { transform: translate(0, ${directionY * (height - imgSize) * 0.5}px); }
                100% { transform: translate(0, 0); }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);

        // Apply the animation with easing and delay
        image.style.animation = `bounce${index} ${speed}s cubic-bezier(0.42, 0, 0.58, 1) infinite ${delay}s`;
    });
});
