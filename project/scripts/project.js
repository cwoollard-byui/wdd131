const currentYear = document.getElementById(`currentyear`);
const lastModified = document.getElementById(`lastModified`);
const menuButton = document.getElementById(`menu-btn`);
const primaryNav = document.getElementById(`primary-nav`);
const recordCards = document.getElementById(`record-cards`);
const recordFilter = document.getElementById(`record-filter`);
const helpForm = document.getElementById(`help-form`);
const savedCount = document.getElementById(`saved-count`);
const formMessage = document.getElementById(`form-message`);
const requestCount = document.getElementById(`request-count`);

const records = [
    {
        category: `birth`,
        name: `Birth certificate`,
        dates: `From July 1837`,
        use: `Use this when you need parents, a mother's maiden name, or a place of birth.`,
        gives: `Date and place of birth, parents, mother's maiden name, and father's occupation.`
    },
    {
        category: `marriage`,
        name: `Marriage certificate`,
        dates: `From July 1837`,
        use: `Use this to connect a couple to their fathers and confirm where they lived when they married.`,
        gives: `Names, ages, residences, occupations, fathers, witnesses, date, and place.`
    },
    {
        category: `death`,
        name: `Death certificate`,
        dates: `From July 1837`,
        use: `Use this to close a life story and check a final place, age, occupation, or informant.`,
        gives: `Date, place, age, occupation, cause of death, and informant.`
    },
    {
        category: `census`,
        name: `Census record`,
        dates: `1841 to 1921`,
        use: `Use this to find a household together and compare names, ages, occupations, and birthplaces.`,
        gives: `Names, ages, relationships, occupations, addresses, and birthplaces, depending on the year.`
    }
];

function setDates() {
    if (currentYear) {
        currentYear.textContent = `${new Date().getFullYear()}`;
    }

    if (lastModified) {
        lastModified.textContent = `Last Modification: ${document.lastModified}`;
    }
}

function toggleMenu() {
    primaryNav.classList.toggle(`open`);
    menuButton.classList.toggle(`open`);
}

function createRecordCard(record) {
    return `
    <article class="record-card">
        <h3>${record.name}</h3>
        <p><span class="label">Dates:</span> ${record.dates}</p>
        <p><span class="label">Best for:</span> ${record.use}</p>
        <p><span class="label">May give:</span> ${record.gives}</p>
    </article>`;
}

function displayRecords(category) {
    let selectedRecords = records;

    if (category !== `all`) {
        selectedRecords = records.filter((record) => record.category === category);
    }

    let cards = ``;
    selectedRecords.forEach((record) => {
        cards += createRecordCard(record);
    });

    recordCards.innerHTML = cards;
}

function getHelpCount() {
    return Number(localStorage.getItem(`helpCount`)) || 0;
}

function showHelpCount() {
    const count = getHelpCount();

    if (savedCount) {
        savedCount.textContent = `Requests saved from this browser: ${count}`;
    }
}

function saveHelpRequest(event) {
    event.preventDefault();

    const count = getHelpCount() + 1;
    const topic = document.getElementById(`topic`).value;

    localStorage.setItem(`helpCount`, count);
    localStorage.setItem(`lastTopic`, topic);

    helpForm.reset();
    showHelpCount();

    if (formMessage && requestCount) {
        if (count === 1) {
            requestCount.textContent = `This browser has saved 1 help request.`;
        } else {
            requestCount.textContent = `This browser has saved ${count} help requests.`;
        }

        formMessage.removeAttribute(`hidden`);
    }
}

setDates();

if (menuButton && primaryNav) {
    menuButton.addEventListener(`click`, toggleMenu);
}

if (recordCards && recordFilter) {
    displayRecords(`all`);

    recordFilter.addEventListener(`change`, function () {
        displayRecords(recordFilter.value);
    });
}

if (helpForm) {
    showHelpCount();
    helpForm.addEventListener(`submit`, saveHelpRequest);
}
