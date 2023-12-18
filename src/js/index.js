
// toggling to the menu icon

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menuIcon = document.querySelector('.menu-icon');
    var navList = document.querySelector('.navlist');
  
    menuToggle.addEventListener('change', function() {
      if (menuToggle.checked) {
        menuIcon.style.background = 'transparent';
        navList.style.display = 'block';
        navList.style.right = '10px';
      } else {
        menuIcon.style.background = '';
        navList.style.display = 'none';
        navList.style.right = '';
        navList.display = 'flex'
      }
    });
  });
  
  // Scrolling to top functionality
  
  
  function scrollToTop() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scrollTop - scrollTop / 8);
    }
  }
  const backToTopButton = document.getElementById('back-to-top-btn');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) { 
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  
  
  