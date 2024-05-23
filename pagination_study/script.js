let count = 0;
const pages = document.querySelector(".pages");
const buttons = document.getElementsByClassName("btn-page");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

function prevClick() {
  buttons[count].classList.remove("active");
  if (count > 0) {
    count--;
  }
  buttons[count].classList.add("active");
}
function nextClick() {
  buttons[count].classList.remove("active");
  if (count != buttons.length - 1) {
    count++;
  }
  buttons[count].classList.add("active");
}

prev.addEventListener("click", prevClick);
next.addEventListener("click", nextClick);
