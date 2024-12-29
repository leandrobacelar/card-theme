const button = document.querySelector(".action-button");
const titleCard = document.querySelector(".card-title");

button.addEventListener("click", handleClick);

function handleClick() {
  titleCard.style.color = randomColor();
}

function randomColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + color;
}
