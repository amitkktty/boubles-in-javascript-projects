document.addEventListener("DOMContentLoaded", function() {
    const bubbleContainer = document.querySelector(".bubble-container");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        let size = Math.random() * 250 + 125; // Random size between 10px to 60px
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";

        bubble.style.left = Math.random() * window.innerWidth + "px";

        bubble.style.animationDuration = Math.random() * 4 + 4 + "s"; // Between 3s and 6s

        bubbleContainer.appendChild(bubble);

        // Remove the bubble after it floats up
        setTimeout(() => {
            bubble.remove();
        }, 6000);
    }

    // Create bubbles at random intervals
    setInterval(createBubble, 350);
});