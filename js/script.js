// Scroll to top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Show or hide the button based on scroll position
  function toggleButtonVisibility() {
    const button = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 2) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  }
  // Event action for Scroll top
  document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);
  window.addEventListener('scroll', toggleButtonVisibility);
  
  // Initial call to set button visibility based on page load
  toggleButtonVisibility();