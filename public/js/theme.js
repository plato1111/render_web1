document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', this.checked ? 'dark' : 'light');
  });
});
