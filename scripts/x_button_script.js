document.querySelector('.close-button').addEventListener('click', async function () {

    document.querySelectorAll('.text').forEach(item => {
        item.classList.remove('hidden');
        item.style.transition = 'opacity 0.5s ease'; // Smooth transition for hiding 
    });

    // Hide the 'whole-text' element
    const whole_text = document.querySelector('.whole-text'); // Use the correct class name
    whole_text.style.transition = 'opacity 0.5s ease'; // Smooth transition for hiding
    whole_text.style.opacity = '0'; // Fade out the whole-text
    
    whole_text.style.display = 'none';
    this.style.transition = 'opacity 0.5s ease'; // Set display to 'none' to hide the element
    this.style.display = 'none';

    const arrow_r = document.querySelector('.right-arrow');
    const arrow_l = document.querySelector('.left-arrow');
    arrow_r.classList.remove('hidden');
    arrow_l.classList.remove('hidden');

});