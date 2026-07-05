import { renderWeatherCard } from "./modules/dom.js";
import { setupSearchEvents } from "./modules/events.js";
import {} from "./styles/style.css";

function init() {
    setupSearchEvents();
    // renderWeatherCard()
}

document.addEventListener("DOMContentLoaded", init);
