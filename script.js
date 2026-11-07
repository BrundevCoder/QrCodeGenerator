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
    color = "f1f50e";
    generateQrCode();
})
blueColorButton.addEventListener("click", () => {
    color = "0e48f5";
    generateQrCode();
})
greenColorButton.addEventListener("click", () => {
    color = "0cff45";
    generateQrCode();
})
redColorButton.addEventListener("click", () => {
    color = "ff0c0c";
    generateQrCode();
})

generateButton.addEventListener("click", () => {
    generateQrCode();
})