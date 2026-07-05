export function renderWeatherCard(data) {
    const {
        address: name,
        currentConditions: { temp, humidity },
        description: desc,
    } = data;

    const weatherCard = document.querySelector(".weather-card");
    const cityCard = document.createElement("div");
    const cityDisplay = document.createElement("h2");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent =
        name.length > 1
            ? name.charAt(0).toUpperCase() + name.slice(1)
            : name.charAt(0).toUpperCase();
    tempDisplay.textContent = `${temp}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = desc;

    cityCard.className = "card";
    cityCard.append(cityDisplay, tempDisplay, humidityDisplay, descDisplay);

    weatherCard.appendChild(cityCard);
}
