// Dark/light theme toggle + year
const btn = document.getElementById('themeToggle');
const root = document.documentElement;
const key = 'theme-pref';
const saved = localStorage.getItem(key);

if(saved === 'light'){ document.body.classList.add('light'); }
btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(key, document.body.classList.contains('light') ? 'light' : 'dark');
});

document.getElementById('year').textContent = new Date().getFullYear();
