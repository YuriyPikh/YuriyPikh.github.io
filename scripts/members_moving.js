window.addEventListener('load', () => {
    const photoGrid = document.querySelector('.photo-grid');
    
    if (!photoGrid) {
        console.error('Element with class .photo-grid not found!');
        return;
    }

    let scrollSpeed = 1; // Speed of scrolling

    const clone = photoGrid.innerHTML;
    photoGrid.innerHTML += clone; 

    function autoSlide() {
        photoGrid.scrollBy({ left: scrollSpeed, behavior: 'auto' });

        if (photoGrid.scrollLeft >= photoGrid.scrollWidth / 2) {
            photoGrid.scrollTo({ left: 0, behavior: 'auto' });
        }

        requestAnimationFrame(autoSlide);
    }

    autoSlide();
});