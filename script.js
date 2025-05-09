 document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const toggleBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navRight = document.querySelector(".nav-right");

    // Toggle dropdown menu (hamburger)
    if (menuBtn && dropdownMenu) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent window click event
        dropdownMenu.classList.toggle('show');
      });

      window.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.classList.remove('show');
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 950) {
          dropdownMenu.classList.remove('show');
        }
      });
    }

    // Toggle main nav links (optional additional menu)
    if (toggleBtn && navLinks && navRight) {
      toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        navRight.classList.toggle("active");
      });
    }
  });
