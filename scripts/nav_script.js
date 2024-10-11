
    // Get all navigation items and indicators
    const navItems = document.querySelectorAll('.nav-item');
    const indicators = document.querySelectorAll('.indicator');

    let currentIndex = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;

    // Function to update the active navigation item and indicators
    

    // Function to move right (next navigation item)
    function moveRight() {
        currentIndex = (currentIndex + 1) % navItems.length; // Loop back if at the end
        console.log('Moved Right, new index:', currentIndex);  // Debug log
        updateActiveNav(currentIndex);
        window.location.href = navItems[currentIndex].getAttribute('href');
    }

    // Function to move left (previous navigation item)
    function moveLeft() {
        currentIndex = (currentIndex - 1 + navItems.length) % navItems.length; // Loop back if at the beginning
        console.log('Moved Left, new index:', currentIndex);  // Debug log
        updateActiveNav(currentIndex);
        window.location.href = navItems[currentIndex].getAttribute('href');
    }

    // Get arrow buttons
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');

    // Attach click event listeners to the arrows
    rightArrow.addEventListener('click', () => {
        console.log('Right Arrow Clicked');  // Debug log
        moveRight();
    });
    leftArrow.addEventListener('click', () => {
        console.log('Left Arrow Clicked');  // Debug log
        moveLeft();
    });

    // Attach click event listeners to each nav item for the initial click handling
    navItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();  // Prevent default anchor click behavior
            currentIndex = index; // Update currentIndex to the clicked item
            console.log('Nav Item Clicked, index:', currentIndex);  // Debug log
            updateActiveNav(currentIndex);
            window.location.href = navItems[currentIndex].getAttribute('href');
        });
    });

    window.location.href = navItems[index].getAttribute('href');



function updateActiveNav(index) {
    // Remove 'active' class from all items and indicators
    navItems.forEach(nav => nav.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    // Add 'active' class to the current item and corresponding indicator
    navItems[index].classList.add('active');
    indicators[index].classList.add('active');

    localStorage.setItem('currentIndex', index);

}