const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

const menuButton = document.getElementById('menu-btn');
const primaryNav = document.getElementById('primary-nav');

menuButton.addEventListener('click', function () {
    primaryNav.classList.toggle('open');
    menuButton.classList.toggle('open');
});
