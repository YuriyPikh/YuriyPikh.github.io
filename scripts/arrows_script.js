// Get all navigation items
const navItems = document.querySelectorAll('.nav-item');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0; // Initial active index

// Function to update the active navigation item
function updateActiveNav(index) {
    // Remove 'active' class from all items
    navItems.forEach(nav => nav.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    // Add 'active' class to the current item
    navItems[index].classList.add('active');
    indicators[index].classList.add('active');

    let href = navItems[index].getAttribute('href');
    window.location.href = href;
}

// Function to move right
function moveRight() {
    currentIndex = (currentIndex + 1) % navItems.length; // Loop back if at the end
    updateActiveNav(currentIndex);
}

// Function to move left
function moveLeft() {
    currentIndex = (currentIndex - 1 + navItems.length) % navItems.length; // Loop back if at the beginning
    updateActiveNav(currentIndex);
}

// Get arrow buttons
const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');

// Attach click event listeners to the arrows
rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);
