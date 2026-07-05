export function setupValidationEvents() {
    const search = document.getElementById("search");
    const form = document.querySelector("form");
    const errorMsg = document.querySelector(".error");
    
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
        }
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
