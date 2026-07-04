const form = document.querySelector("form");
const search = document.getElementById("search");
const btn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".error");

function showError() {
    if (search.validity.valueMissing) {
        errorMsg.textContent = "It can't be empty";
    } else if (search.validity.tooShort) {
        errorMsg.textContent = `It's too short needs ${search.minLength - search.value.length} more ${search.value.length == 3 ? "char" : "chars"}`;
    }
    errorMsg.className = "error active";
}

form.addEventListener("submit", (e) => {
    if (!search.validity.valid) {
        e.preventDefault();
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
