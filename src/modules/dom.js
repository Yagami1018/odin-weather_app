export function renderWeatherCard(data) {
    const weatherCard = document.querySelector(".weather-card");
    const cityCard = document.createElement("div");
    const cityDisplay = document.createElement("h2")
    const tempDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descDisplay  = document.createElement("p")
    const weatherEmoji = document.createElement("p")

    cityCard.className = "card"
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp}°C`

    weatherCard.appendChild(cityCard);
}
