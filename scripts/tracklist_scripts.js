document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', async function () {
        // Get the aside and figure elements to insert clicked album details
        const aside = document.querySelector('.track-box');
        const figure = aside.querySelector('.item');

        // Clear the current aside content
        figure.innerHTML = '';

        // Clone the clicked item
        const clonedItem = this.cloneNode(true);

        // Show the tracklist of the clicked album
        const trackList = clonedItem.querySelector('.track-list');
        if (trackList) {
            trackList.style.display = 'block'; // Show tracklist

        }

        // Hide all other photo items except the clicked one
        document.querySelectorAll('.photo-item').forEach(photo => {
            photo.classList.add('hidden'); // Hide all items
        });

        const button = document.querySelector('.close-button');
        button.style.display= 'block';

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

        const soundFile = clonedItem.getAttribute('data-sound');
        
        console.log(sharedVariable.musicTiming);

        playSoundTime(soundFile, sharedVariable.musicTiming);
        
    });
});
