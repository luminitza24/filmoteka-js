const checkbox = document.getElementById('checkbox');

const isDark = localStorage.getItem('darkMode') === 'true';
if (isDark) {
  document.body.classList.add('dark');
  checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  const isDarkMode = document.body.classList.contains('dark');

  localStorage.setItem('darkMode', isDarkMode.toString());
});
