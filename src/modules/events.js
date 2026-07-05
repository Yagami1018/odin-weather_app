import { renderHttpError, renderWeatherCard } from "./dom.js";

export function setupSearchEvents() {
    const errorMsg = document.querySelector(".error");
    const search = document.getElementById("search");
    const form = document.querySelector("form");

    async function searchWeather() {
        try {
            const city = search.value;
            const apiKey = "N6PPRCK232CD68VDU7Z6CMCBC";
            if (city.length >= 1) {
                const response = await fetch(
                    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`,
                );
                if (!response.ok) {
                    renderHttpError(response);
                    return;
                }
                const data = await response.json();
                renderWeatherCard(data);
            }
        } catch (error) {
            console.error(`Error inesperado: ${error}`)
        }
    }

    function showError() {
        if (search.validity.valueMissing) {
            errorMsg.textContent = "It can't be empty";
        }

        errorMsg.className = "error active";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!search.validity.valid) {
            showError();
            return;
        }
        searchWeather();
    });

    search.addEventListener("input", () => {
        if (search.validity.valid) {
            errorMsg.textContent = "";
            errorMsg.className = "error";
            return;
        }
        showError();
    });
}
