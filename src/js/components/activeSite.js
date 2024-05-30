document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('#navbar ul li a');
  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentPath) {
      link.parentElement.classList.add('active-site');
    }
  });
});
