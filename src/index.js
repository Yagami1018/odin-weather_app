import { renderWeatherCard } from "./modules/dom.js";
import { setupSearchEvents } from "./modules/events.js";
import {} from "./styles/style.css";

function init() {
    setupSearchEvents();
}

document.addEventListener("DOMContentLoaded", init);
