/**
 * @description Applies light/dark theme based on system preferences.
 * @param {boolean} darkTheme
 */
function applyTheme(darkTheme) {
  if (darkTheme) {
    document.documentElement.classList.remove('light-theme');
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
    document.documentElement.classList.add('light-theme');
  }
}

// Apply initial theme based on user preference
const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
applyTheme(themeMediaQuery.matches);

// Event listener to respond to changes in user's preference
themeMediaQuery.addEventListener('change', (e) => {
  applyTheme(e.matches);
});
