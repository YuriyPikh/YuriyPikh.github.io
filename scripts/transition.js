window.onload = () => {
    // Select the preloader, transition, and background content elements
    const preloader = document.getElementById('preloader');
    const transition_el = document.querySelector('.transition');
    const background = document.querySelector('.background');

    // Hide preloader and start the transition
    setTimeout(() => {
        // Hide the preloader after the page has loaded
        preloader.style.display = 'none';
        
        // Start the transition after preloader is hidden
        transition_el.classList.remove('is-active');

    }, 500); // Delay before hiding the preloader and starting the transition
};