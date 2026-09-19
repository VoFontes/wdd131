// Current year
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Last modified date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


// Static weather values
const temperature = 45;
const windSpeed = 10;


// Calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}


// Display wind chill only when conditions are valid
const windChillElement = document.querySelector("#wind-chill");

if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)} °F`;
} else {
    windChillElement.textContent = "N/A";
}