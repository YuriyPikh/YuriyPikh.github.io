document.querySelectorAll('.text').forEach(item => {
    item.addEventListener('click', async function () {
        // Get the aside and figure elements to insert clicked text details
        const aside = document.querySelector('.whole-text');
        const figure = aside.querySelector('.object');

        // Clear the current aside content
        figure.innerHTML = '';

        // Clone the clicked item
        const clonedItem = this.cloneNode(true);

        // Show the text of the clicked h3
        const text = clonedItem.querySelector('.textp');
        if (text) {
            text.style.display = 'block'; // Show text

        }
        const h3 = clonedItem.querySelector('h3');
        const gif = clonedItem.querySelector('img');
        const button = document.querySelector('.close-button');
        h3.style.display = 'none';
        gif.style.display = 'block';
        button.style.display= 'block';

        // Hide all other text items except the clicked one
        document.querySelectorAll('.text').forEach(text => {
            text.classList.add('hidden'); // Hide all items
        });

        // Prepare for the view transition
        aside.style.opacity = '0'; // Start with the aside hidden
        aside.style.transform = 'scale(0.9) rotate(10deg)'; // Initial scale and rotate

        // Append the cloned item to the figure inside the aside
        figure.appendChild(clonedItem);

        // Start the view transition if supported
        if (document.startViewTransition) {
            const animation = document.startViewTransition(() => {
                // Make aside visible during the transition
                aside.style.display = 'block';
                aside.style.opacity = '1'; // Fade in
                aside.style.transform = 'scale(1) rotate(0deg)'; // Scale to normal and rotate back
            });

            // Wait for the transition to complete
            await animation.finished;
        } else {
            aside.style.display = 'block'; // Fallback for unsupported browsers
            aside.style.opacity = '1'; // Ensure it's visible
            aside.style.transform = 'scale(1) rotate(0deg)'; // Reset transform
        }

            
        // Hide the original item
        this.classList.add('hidden');

        // Hide arrows if needed
        const arrow_r = document.querySelector('.right-arrow');
        const arrow_l = document.querySelector('.left-arrow');
        arrow_r.classList.add('hidden');
        arrow_l.classList.add('hidden');

        
    });
});