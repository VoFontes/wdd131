const temples = [
    {
        templeName: "Salt Lake Utah Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-74680.jpg"
    },

    {
        templeName: "St. George Utah Temple",
        location: "St. George, Utah, USA",
        dedicated: "1877, April, 6",
        area: 110000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40449.jpg"
    },

    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, USA",
        dedicated: "1888, May, 21",
        area: 100373,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-45813.jpg"
    },

    {
        templeName: "Logan Utah Temple",
        location: "Logan, Utah, USA",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-63979.jpg"
    },

    {
        templeName: "Provo City Center Utah Temple",
        location: "Provo, Utah, USA",
        dedicated: "2016, March, 20",
        area: 96300,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-11068.jpg"
    },

    {
        templeName: "Brigham City Utah Temple",
        location: "Brigham City, Utah, USA",
        dedicated: "2012, September, 23",
        area: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-3906.jpg"
    },

    {
        templeName: "Oquirrh Mountain Utah Temple",
        location: "South Jordan, Utah, USA",
        dedicated: "2009, August, 21",
        area: 96699,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-4035.jpg"
    },

    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4057.jpg"
    },

    {
        templeName: "Hermosillo Sonora Mexico Temple",
        location: "Hermosillo, Sonora, Mexico",
        dedicated: "2000, February, 27",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hermosillo-sonora-mexico-temple/hermosillo-sonora-mexico-temple-20644-main.jpg"
    },

    {
        templeName: "Guadalajara Mexico Temple",
        location: "Guadalajara, Mexico",
        dedicated: "1984, April, 29",
        area: 10800,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/guadalajara-mexico-temple/guadalajara-mexico-temple-17313.jpg"
    }
];


const container = document.querySelector(".temple-cards");


function displayTemples(templesToDisplay) {

    container.innerHTML = "";

    templesToDisplay.forEach((temple) => {

        const card = document.createElement("article");

        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>

            <p>
                <strong>Location:</strong>
                ${temple.location}
            </p>

            <p>
                <strong>Dedicated:</strong>
                ${temple.dedicated}
            </p>

            <p>
                <strong>Area:</strong>
                ${temple.area.toLocaleString()} sq ft
            </p>

            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName}"
                loading="lazy"
            >
        `;

        container.appendChild(card);
    });
}


function getYear(temple) {

    return Number(temple.dedicated.split(",")[0]);

}


function filterTemples(category) {

    let filteredTemples;

    switch (category) {

        case "old":

            filteredTemples = temples.filter(
                temple => getYear(temple) < 1900
            );

            break;


        case "new":

            filteredTemples = temples.filter(
                temple => getYear(temple) > 2000
            );

            break;


        case "large":

            filteredTemples = temples.filter(
                temple => temple.area > 90000
            );

            break;


        case "small":

            filteredTemples = temples.filter(
                temple => temple.area < 10000
            );

            break;


        default:

            filteredTemples = temples;

            break;
    }


    displayTemples(filteredTemples);
}


/* HOME */

document.querySelector("#home").addEventListener("click", (event) => {

    event.preventDefault();

    displayTemples(temples);

});


/* OLD */

document.querySelector("#old").addEventListener("click", (event) => {

    event.preventDefault();

    filterTemples("old");

});


/* NEW */

document.querySelector("#new").addEventListener("click", (event) => {

    event.preventDefault();

    filterTemples("new");

});


/* LARGE */

document.querySelector("#large").addEventListener("click", (event) => {

    event.preventDefault();

    filterTemples("large");

});


/* SMALL */

document.querySelector("#small").addEventListener("click", (event) => {

    event.preventDefault();

    filterTemples("small");

});


/* HAMBURGER MENU */

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {

        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");

    } else {

        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");

    }

});


/* CLOSE MENU AFTER CLICK */

document.querySelectorAll("#nav-menu a").forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-label", "Open navigation menu");

    });

});


/* FOOTER */

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


/* DISPLAY ALL TEMPLES WHEN PAGE LOADS */

displayTemples(temples);