const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

const modeToggle = document.getElementById('toggle');
const body = document.body;




modeToggle.addEventListener('click', () => {

    // are we in dark mode?
        // yes? remove dark mode styles & add light mode styles
        // not? remove light mode styles & add dark mode styles

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});