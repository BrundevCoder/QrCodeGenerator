const qrCodeDIsplayer = document.querySelector(".qrCodeResult");

const generateButton = document.getElementById("generateButton");
const contentInput = document.getElementById("contentInput");

const yellowColorButton = document.getElementById("yellowColorButton");
const blueColorButton = document.getElementById("blueColorButton");
const greenColorButton = document.getElementById("greenColorButton");
const redColorButton = document.getElementById("redColorButton");

let color = "#ffffff";

function generateQrCode() {
    const url = contentInput.value;

    if (url.length == 0) {
        return;
    }

    qrCodeDIsplayer.src = `https://quickchart.io/qr?text=${url}&dark=000000&light=${color}&size=150`;
}

yellowColorButton.addEventListener("click", () => {
    const element = document.querySelector(".selected");
    element.classList.remove("selected");
    yellowColorButton.classList.add("selected");
    color = "f1f50e";
})
blueColorButton.addEventListener("click", () => {
    const element = document.querySelector(".selected");
    element.classList.remove("selected");
    blueColorButton.classList.add("selected");
    color = "0e48f5";
})
greenColorButton.addEventListener("click", () => {
    const element = document.querySelector(".selected");
    element.classList.remove("selected");
    greenColorButton.classList.add("selected");
    color = "0cff45";
})
redColorButton.addEventListener("click", () => {
    const element = document.querySelector(".selected");
    element.classList.remove("selected");
    redColorButton.classList.add("selected");
    color = "ff0c0c";
})

generateButton.addEventListener("click", () => {
    generateQrCode();
})