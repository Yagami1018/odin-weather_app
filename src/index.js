import { setupValidationEvents } from "./modules/events.js";
import {} from "./styles/style.css";

function init(){
    setupValidationEvents()
}

document.addEventListener("DOMContentLoaded", init)