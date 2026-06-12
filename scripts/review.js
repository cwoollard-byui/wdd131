const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;
reviewCount += 1;
localStorage.setItem('reviewCount', reviewCount);

document.getElementById('reviewcount').textContent = reviewCount;
