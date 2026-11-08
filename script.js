const qrCodeDIsplayer = document.querySelector(".qrCodeResult");

const generateButton = document.getElementById("generateButton");
const contentInput = document.getElementById("contentInput");
const finderDotStyle = document.getElementById("finderDotStyle");
const captionInput = document.getElementById("captionInput");

const yellowColorButton = document.getElementById("yellowColorButton");
const blueColorButton = document.getElementById("blueColorButton");
const greenColorButton = document.getElementById("greenColorButton");
const redColorButton = document.getElementById("redColorButton");
const whiteColorButton = document.getElementById("whiteColorButton");

let color = "ffffff";

function generateQrCode() {
    const url = contentInput.value;
    const captions = captionInput.value

    if (url.length == 0) {
        return;
    }

    qrCodeDIsplayer.src = `https://quickchart.io/qr?text=${url}&dark=000000&light=${color}&finderStyle=${finderDotStyle.value}${captions ? `&caption=${captionInput.value}` : ""}&size=150`;
}

yellowColorButton.addEventListener("click", () => {
    const element = document.querySelector(".selected-button");
    element.classList.remove("selected-button");
    yellowColorButton.classList.add("selected-button");
    color = "f1f50e";
})
blueColorButton.addEventListener("click", () => {
    const element = document.querySelector(".selected-button");
    element.classList.remove("selected-button");
    blueColorButton.classList.add("selected-button");
    color = "0e48f5";
})
greenColorButton.addEventListener("click", () => {
    const element = document.querySelector(".selected-button");
    element.classList.remove("selected-button");
    greenColorButton.classList.add("selected-button");
    color = "0cff45";
})
redColorButton.addEventListener("click", () => {
    const element = document.querySelector(".selected-button");
    element.classList.remove("selected-button");
    redColorButton.classList.add("selected-button");
    color = "ff0c0c";
})
whiteColorButton.addEventListener("click", () => {
    const element = document.querySelector(".selected-button");
    element.classList.remove("selected-button");
    whiteColorButton.classList.add("selected-button");
    color = "ffffff";
})

generateButton.addEventListener("click", () => {
    generateQrCode();
})