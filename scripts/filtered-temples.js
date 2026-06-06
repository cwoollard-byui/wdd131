const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

const menuButton = document.getElementById('menu-btn');
const primaryNav = document.getElementById('primary-nav');

menuButton.addEventListener('click', function () {
    primaryNav.classList.toggle('open');
    menuButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Preston England",
        location: "Chorley, England, United Kingdom",
        dedicated: "1998, June, 7",
        area: 69630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/400x250/preston-temple-762730-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-main.jpeg"
    },
    {
        templeName: "Oakland California",
        location: "Oakland, California, United States",
        dedicated: "1964, November, 17",
        area: 80157,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/01-Oakland-Temple-Exterior-2236889.jpg"
    }
];

const album = document.getElementById('temples');

function createTempleCard(temple) {
    return `
    <section class="temple-card">
        <h2>${temple.templeName}</h2>
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        <p><span class="label">Location:</span> ${temple.location}</p>
        <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
        <p><span class="label">Size:</span> ${temple.area} sq ft</p>
    </section>`;
}

function displayTemples(list) {
    let cards = '';
    list.forEach((temple) => {
        cards += createTempleCard(temple);
    });
    album.innerHTML = cards;
}

function getYear(temple) {
    return Number(temple.dedicated.split(',')[0]);
}

document.getElementById('home').addEventListener('click', (event) => {
    event.preventDefault();
    displayTemples(temples);
});

document.getElementById('old').addEventListener('click', (event) => {
    event.preventDefault();
    displayTemples(temples.filter((temple) => getYear(temple) < 1900));
});

document.getElementById('new').addEventListener('click', (event) => {
    event.preventDefault();
    displayTemples(temples.filter((temple) => getYear(temple) > 2000));
});

document.getElementById('large').addEventListener('click', (event) => {
    event.preventDefault();
    displayTemples(temples.filter((temple) => temple.area > 90000));
});

document.getElementById('small').addEventListener('click', (event) => {
    event.preventDefault();
    displayTemples(temples.filter((temple) => temple.area < 10000));
});

displayTemples(temples);
