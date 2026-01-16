// Use the 'load' event to wait for the whole page (images, scripts, etc.)
        window.addEventListener('load', function() {
            const loader = document.getElementById('loading-screen');

            // Set your artificial delay (3000ms = 3 seconds)
            const minimumDelay = 2500;

            setTimeout(() => {
                // Smoothly fade out the loader
                loader.style.opacity = '0';
                                // Completely remove the loader from the DOM after the fade finishes
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 800); // Matches the CSS transition time (0.8s)

            }, minimumDelay);
        });
