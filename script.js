document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'sup dude';
});

const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        themeBtn.textContent = 'Light Mode';
    } else {
        themeBtn.textContent = 'Dark Mode';
    }
});