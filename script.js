const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const savedTheme = localStorage.getItem('dm-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle?.setAttribute('aria-pressed', 'true');
  if (themeIcon) themeIcon.textContent = '☾';
}

themeToggle?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeIcon.textContent = isDark ? '☾' : '☼';
  localStorage.setItem('dm-theme', isDark ? 'dark' : 'light');
});
