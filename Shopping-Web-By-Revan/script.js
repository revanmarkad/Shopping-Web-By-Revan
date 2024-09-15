const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (toggle) {
    toggle.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}