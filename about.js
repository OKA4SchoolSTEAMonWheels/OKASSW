const themeToggle = document.querySelector('[data-theme-toggle]');
const root = document.documentElement;
let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
root.setAttribute('data-theme', theme);
if (themeToggle) {
  const syncThemeLabel = () => {
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.textContent = theme === 'dark' ? '☼' : '◐';
  };
  syncThemeLabel();
  themeToggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    syncThemeLabel();
  });
}
