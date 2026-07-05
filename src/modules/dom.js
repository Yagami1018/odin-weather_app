import { capitalize, displayTemp } from "./utils.js";

const weatherCard = document.querySelector(".weather-card");

export function renderWeatherCard({
    address: name,
    currentConditions: { temp, humidity },
    description: desc,
}) {
    weatherCard.innerHTML = "";

    const tempSelected = document.querySelector(
        'input[type="radio"]:checked',
    ).value;
    const radBtns = document.querySelectorAll('input[type="radio"]');

    const cityCard = document.createElement("div");
    const cityDisplay = document.createElement("h2");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = capitalize(name);
    tempDisplay.textContent = displayTemp(temp, tempSelected);
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = desc;

    radBtns.forEach((option) =>
        option.addEventListener("click", () => {
            if (option.checked) {
                tempDisplay.textContent = displayTemp(temp, option.value);
            }
        }),
    );

    cityCard.className = "card";
    cityCard.append(cityDisplay, tempDisplay, humidityDisplay, descDisplay);

    weatherCard.appendChild(cityCard);
}
export function renderHttpError(response) {
    weatherCard.innerHTML = "";
    const httpError = document.createElement("p");
    httpError.textContent = `HTTP Error - Status: ${response.status}`;
    httpError.className = "http-error";
    weatherCard.appendChild(httpError);
}
