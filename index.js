// Get the phone image and the four screens
const phoneImage = document.querySelector('.img');
const screens = document.querySelectorAll('.screen');

// Set the starting index to 0
let currentScreenIndex = 0;

// Show the first screen image when the page loads
screens[currentScreenIndex].classList.add('active');
phoneImage.style.backgroundPosition = `${-screens[currentScreenIndex].offsetLeft}px ${-screens[currentScreenIndex].offsetTop}px`;

// Set the interval for sliding to the next screen
const slideInterval = setInterval(slideToNextScreen, 5000);

// Define the function to slide to the next screen
function slideToNextScreen() {
  // Set the current screen to be hidden
  screens[currentScreenIndex].classList.remove('active');
  
  // Increment the index to the next screen
  currentScreenIndex = (currentScreenIndex + 1) % screens.length;
  
  // Set the next screen to be visible
  screens[currentScreenIndex].classList.add('active');
  
  // Move the phone image background position to show the current screen
  phoneImage.style.backgroundPosition = `${-screens[currentScreenIndex].offsetLeft}px ${-screens[currentScreenIndex].offsetTop}px`;
}

 
  