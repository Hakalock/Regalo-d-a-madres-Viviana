const petalsContainer = document.getElementById("petals");
const heartsContainer = document.getElementById("heartsBackground");
const surpriseButton = document.getElementById("surpriseButton");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createPetals() {
  for (let i = 0; i < 36; i++) {
    const petal = document.createElement("span");
    petal.classList.add("petal");

    petal.style.left = `${randomBetween(0, 100)}vw`;
    petal.style.animationDuration = `${randomBetween(7, 15)}s`;
    petal.style.animationDelay = `${randomBetween(0, 10)}s`;
    petal.style.opacity = randomBetween(0.35, 0.85);
    petal.style.transform = `rotate(${randomBetween(0, 360)}deg)`;

    petalsContainer.appendChild(petal);
  }
}

function createFloatingHearts() {
  const hearts = ["♡", "♥", "💖", "💕"];

  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");
    heart.classList.add("floating-heart");
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = `${randomBetween(0, 100)}vw`;
    heart.style.animationDuration = `${randomBetween(9, 18)}s`;
    heart.style.animationDelay = `${randomBetween(0, 12)}s`;
    heart.style.fontSize = `${randomBetween(14, 28)}px`;

    heartsContainer.appendChild(heart);
  }
}

surpriseButton.addEventListener("click", (event) => {
  modal.classList.add("show");
  createSparkles(event.clientX, event.clientY);
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.addEventListener("click", (event) => {
  if (
    event.target.tagName.toLowerCase() !== "button" &&
    !event.target.closest("a")
  ) {
    createSparkles(event.clientX, event.clientY);
  }
});

createPetals();
createFloatingHearts();
