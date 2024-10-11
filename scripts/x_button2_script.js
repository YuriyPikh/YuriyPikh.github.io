document.querySelector('.close-button').addEventListener('click', async function () {

    document.querySelectorAll('.photo-item').forEach(photo => {
        photo.classList.remove('hidden'); // Hide all items
        photo.style.transition = 'opacity 0.5s ease';
    });

    // Hide the 'whole-text' element
    const track_box = document.querySelector('.track-box'); // Use the correct class name
    track_box.style.transition = 'opacity 0.5s ease'; // Smooth transition for hiding
    track_box.style.opacity = '0'; // Fade out the whole-text
    
    track_box.style.display = 'none';
    this.style.transition = 'opacity 0.5s ease'; // Set display to 'none' to hide the element
    this.style.display = 'none';

    const arrow_r = document.querySelector('.right-arrow');
    const arrow_l = document.querySelector('.left-arrow');
    arrow_r.classList.remove('hidden');
    arrow_l.classList.remove('hidden');

    const audioElement = document.getElementById('audio');
    audioElement.pause();

});