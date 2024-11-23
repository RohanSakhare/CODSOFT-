document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('#header .navbar');
    const topNav = document.querySelector('#header .top');
    const offset = 100; // Scroll offset to trigger effect
  
    if (!navbar || !topNav) {
      console.error('Navbar or top navigation element not found!');
      return;
    }
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > offset) {
        topNav.classList.add('hidden'); // Hide top navigation
        navbar.classList.add('scrolled'); // Fix navbar to top with background
      } else {
        topNav.classList.remove('hidden'); // Show top navigation
        navbar.classList.remove('scrolled'); // Reset navbar position and style
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const testimonialCarousel = document.querySelector('#testimonialCarousel');
    if (testimonialCarousel) {
      const carouselInstance = new bootstrap.Carousel(testimonialCarousel, {
        interval: 5000, // Slide interval (milliseconds)
        pause: 'hover', // Pause on hover
      });
    }
  });
  