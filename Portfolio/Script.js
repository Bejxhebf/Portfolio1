const toggle = document.getElementById('toggle');
const body = document.body;
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
  body.classList.toggle('light');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});