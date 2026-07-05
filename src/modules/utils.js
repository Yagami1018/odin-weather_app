export function capitalize(str) {
    if (str.includes(" ")) {
        const stringArray = str.split(" ");
        for (let i = 0; i < stringArray.length; i++) {
            stringArray[i] =
                stringArray[i].charAt(0).toUpperCase() +
                stringArray[i].slice(1);
        }
        return stringArray.join(" ");
    } else {
        return str.length > 1
            ? str.charAt(0).toUpperCase() + str.slice(1)
            : str.charAt(0).toUpperCase();
    }
}
export function displayTemp(fahrenheit, tempSelected) {
    if (tempSelected === "C") {
        let celsius = ((fahrenheit - 32) * 5) / 9;
        return `${celsius.toFixed(1)}°C`;
    }
    return `${fahrenheit}°F`;
}
