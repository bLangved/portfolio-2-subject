const sectionElements = document.querySelectorAll('#main, #aside, #footer');
const overlay = document.querySelector('#overlayEffect');
const menuIcon = document.querySelector('#hamburgerIcon');
const navContainer = document.querySelector('#navbar');

// show/hide nav on mobile devices
menuIcon.addEventListener('click', function (event) {
  event.stopPropagation();

  navContainer.classList.toggle('nav-open');
  menuIcon.classList.toggle('nav-collapsed');

  // nonClickable-element makes elements outside the nav non-clickable when nav is active
  if (navContainer.classList.contains('nav-open')) {
    sectionElements.forEach((section) => {
      section.classList.toggle('nonClickable-element');
    });
  } else {
    sectionElements.forEach((section) => {
      section.classList.toggle('nonClickable-element');
    });
  }
  // Toggle overlay
  overlay.style.display = navContainer.classList.contains('nav-open')
    ? 'block'
    : 'none';
});

// When clicking outside of nav on mobile devices, closes the nav
document.body.addEventListener('click', function (event) {
  if (
    navContainer.classList.contains('nav-open') &&
    !navContainer.contains(event.target)
  ) {
    navContainer.classList.remove('nav-open');
    menuIcon.classList.toggle('nav-collapsed');
    sectionElements.forEach((section) => {
      section.classList.toggle('nonClickable-element');
    });
  }
  // Hide overlay
  if (!navContainer.classList.contains('nav-open')) {
    overlay.style.display = 'none';
  }
});
