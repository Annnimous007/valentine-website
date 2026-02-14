// Start music after first click anywhere
document.body.addEventListener("click", function () {
    document.getElementById("music").play();
}, { once: true });

// Show GIF
function showGif() {
    document.getElementById("gifBox").style.display = "flex";
}

// Close GIF
function closeGif() {
    document.getElementById("gifBox").style.display = "none";
}

// Open popup
function openPopup() {
    document.getElementById("gifBox").style.display = "none";
    document.getElementById("popup").style.display = "flex";
}

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// English letter
function englishLetter() {
    document.getElementById("letterText").innerHTML = `
    You are the most beautiful chapter of my life.
    Every moment with you feels magical.
    I promise to love you forever ❤️
    `;
}

// Tamil letter
function tamilLetter() {
    document.getElementById("letterText").innerHTML = `
    உன்னை பார்த்த நொடியில் என் மனசு மலர்ந்தது,
    உன் சிரிப்பு வந்தால் என் நாள் முழுதும் ஒளிர்ந்தது,
    சொல்ல வார்த்தைகள் தேடினாலும் குறைவே தான் —
    என் இதயம் முழுதும் நீயே நிறைந்திருக்கிறாய். 💕✨
    `;
}