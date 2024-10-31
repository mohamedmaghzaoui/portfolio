// Select all elements with classes 'scroll-text-1', 'scroll-text-2', etc.
const elements = document.querySelectorAll('.scroll-text-1, .scroll-text-2, .scroll-text-3, .scroll-text-4,.skill');

// Function to check if an element is in the viewport
function isElementInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Function to handle scroll and add the 'visible' class to elements in view
function handleScrollAnimation() {
  elements.forEach(el => {
    if (isElementInView(el, 400)) { // Increase margin to 200px
        el.classList.add('visible');
      }
  });
}

// Listen for the scroll event
window.addEventListener('scroll', handleScrollAnimation);

// Initial check in case elements are already in view
handleScrollAnimation();
