const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const interestForm = document.querySelector("#interest-form");
const formMessage = document.querySelector("#form-message");
const destinationForm = document.querySelector("#destination-form");
const destinationType = document.querySelector("#destination-type");
const destinationMessage = document.querySelector("#destination-message");
const currentYear = document.querySelector("#current-year");

// Store destination information in an array of objects.
const destinations = [
    {
        name: "San Carlos",
        type: "coast",
        description: "Enjoy beautiful beaches and views of the Tetakawi mountain."
    },
    {
        name: "Puerto Peñasco",
        type: "coast",
        description: "Explore sandy beaches and enjoy activities by the Sea of Cortez."
    },
    {
        name: "Sonoran Desert",
        type: "nature",
        description: "Discover desert landscapes, unique plants, and wildlife."
    },
    {
        name: "Hermosillo",
        type: "city",
        description: "Experience the capital city of Sonora and its local culture."
    }
];

// Display the current year in the footer.
function displayCurrentYear() {
    if (currentYear) {
        currentYear.textContent = `${new Date().getFullYear()}`;
    }
}

// Open or close the mobile navigation menu.
function toggleMenu() {
    if (menuButton && navMenu) {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute("aria-expanded", `${!isExpanded}`);
        menuButton.setAttribute(
            "aria-label",
            `${isExpanded ? "Open" : "Close"} navigation menu`
        );

        navMenu.classList.toggle("open");
    }
}

// Save a visitor's interests in localStorage.
function saveVisitorInterests(event) {
    event.preventDefault();

    const visitorName = document.querySelector("#visitor-name").value.trim();
    const interest = document.querySelector("#interest").value;

    if (!visitorName || !interest) {
        formMessage.textContent = `Please enter your name and select an interest.`;
        return;
    }

    const visitorPreferences = {
        name: visitorName,
        interest: interest,
        dateSaved: new Date().toISOString()
    };

    localStorage.setItem(
        "sonoraVisitorPreferences",
        JSON.stringify(visitorPreferences)
    );

    formMessage.textContent =
        `Thank you, ${visitorName}! Your interests have been saved in this browser.`;
}

// Show a previously saved visitor preference, if one exists.
function displaySavedPreferences() {
    if (!formMessage) {
        return;
    }

    const savedPreferences = localStorage.getItem("sonoraVisitorPreferences");

    if (savedPreferences) {
        const preferences = JSON.parse(savedPreferences);

        formMessage.textContent =
            `Welcome back, ${preferences.name}! Your saved interest is ${preferences.interest}.`;
    }
}

// Filter destinations according to the visitor's selection.
function filterDestinations(event) {
    event.preventDefault();

    const selectedType = destinationType.value;

    if (!selectedType) {
        destinationMessage.textContent =
            `Please select a destination type first.`;
        return;
    }

    // Use filter() to find destinations matching the selected category.
    const matchingDestinations = destinations.filter(
        (destination) => destination.type === selectedType
    );

    // Use map() to create a list of destination names.
    const destinationNames = matchingDestinations.map(
        (destination) => destination.name
    );

    if (destinationNames.length > 0) {
        destinationMessage.textContent =
            `Destinations to explore: ${destinationNames.join(", ")}.`;
    } else {
        destinationMessage.textContent =
            `No destinations were found in that category.`;
    }
}

// Set up the features available on the current page.
function initializePage() {
    displayCurrentYear();

    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }

    if (interestForm) {
        interestForm.addEventListener("submit", saveVisitorInterests);
        displaySavedPreferences();
    }

    if (destinationForm) {
        destinationForm.addEventListener("submit", filterDestinations);
    }
}

initializePage();