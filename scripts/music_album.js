        // Get all photo items
        const photoItems = document.querySelectorAll('.photo-item');
        const audioElement = document.getElementById('audio');

        // Function to play sound
        function playSound(sound) {
            audioElement.src = sound;
            audioElement.volume = 0.2;
            audioElement.play();
        }

        function playSoundTime(sound, musicTiming) {
            audioElement.src = sound;
            audioElement.volume = 0.2;
            audioElement.currentTime = musicTiming;
            audioElement.play();
        }


        // Add event listeners for hover events
        photoItems.forEach(item => {
            const soundFile = item.getAttribute('data-sound');

            // Play sound on mouse over
            item.addEventListener('mouseover', () => {
                playSound(soundFile);
            });

            // Pause sound on mouse out (if you want to stop the sound)
            item.addEventListener('mouseout', () => {
                audioElement.pause();
                
                sharedVariable.musicTiming = audioElement.currentTime; 
                audioElement.currentTime = 0; 
                
            });
        });