const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yesButton");
const image = document.querySelector(".image");
const question = document.getElementById("question");
const name = document.getElementById("name");
const container = document.querySelector(".container");

// Кнопка Nope ухиляється, але НІКОЛИ не виходить за контейнер
noButton.addEventListener("mouseenter", () => {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const padding = 10;
  const maxX = containerRect.width - buttonRect.width - padding;
  const maxY = containerRect.height - buttonRect.height - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  image.src = "images/sure.jpg";
  question.textContent = "Mais… tu fais quoi ? 😅";
  name.style.display = "none";
});

// Клік на YES — вау-ефект
yesButton.addEventListener("click", () => {
  noButton.remove();
  yesButton.remove();
  name.remove();

  question.innerHTML = `
    Je t'aime, ma chérie 😘<br/><br/>
    <a href="letter.html" class="love-link">💌 Lire ma lettre</a>
  `;

  image.src = "images/flowers.jpg";
});
