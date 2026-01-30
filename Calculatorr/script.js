const specialDate = "2005-01-31"; // birthday
const birthdaySong = new Audio("HappyBday.mp3");

let heartInterval = null;

function checkDate() {
  const userDate = document.getElementById("birthdate").value;
  const error = document.getElementById("errorMessage");

  if (userDate === specialDate) {
    error.textContent = "";
    playMusic();
    showCakePage();
  } else {
    error.textContent = "❌ Halah, kaninong birthdate to?? (charr 😆)";
  }
}

function playMusic() {
  birthdaySong.currentTime = 0;
  birthdaySong.volume = 0.7;
  birthdaySong.play().catch(() => {});
}

function showCakePage() {
  switchPage("homePage", "cakePage");
  startHearts();
}

function startHearts() {
  const cakePage = document.getElementById("cakePage");

  heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = Math.random() > 0.5 ? "💖" : "💕";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    cakePage.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

function stopHearts() {
  clearInterval(heartInterval);
}

function goHome() {
  stopHearts();
  switchPage("messagePage", "homePage");
  document.getElementById("birthdate").value = "";
}

function switchPage(hideId, showId) {
  document.getElementById(hideId).classList.remove("active");
  document.getElementById(showId).classList.add("active");
}

/* Tap anywhere on cake page */
document.getElementById("cakePage").addEventListener("click", () => {
  stopHearts();
  switchPage("cakePage", "messagePage");
});
