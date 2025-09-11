document.addEventListener('DOMContentLoaded', () => {

  /* ===== MOBILE MENU ===== */
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Close menu when a link is clicked
  navLinks.forEach(link => link.addEventListener('click', () => {
    menuToggle.checked = false;
  }));

  // Close menu when clicking outside
  document.addEventListener('click', e => {
    if (menuToggle.checked && !navbar.contains(e.target)) {
      menuToggle.checked = false;
    }
  });

  /* ===== RECOMMENDATION POPUP ===== */
  const form = document.getElementById("recommendation-form");
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");

  function showPopup(message = "Thanks for leaving a recommendation!") {
    if (popupMessage) popupMessage.textContent = message;
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 3000);
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    showPopup();
    form.reset();
  });

  /* ===== BACK TO TOP BUTTON ===== */
  const backToTopBtn = document.getElementById('backToTop');
  const scrollThreshold = 100;

  function toggleBackToTop() {
    backToTopBtn.classList.toggle('show', window.pageYOffset > scrollThreshold);
  }

  backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', toggleBackToTop);

});
