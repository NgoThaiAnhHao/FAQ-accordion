"use strict";
const btn = document.querySelectorAll(".card__btn--title");
const desc = document.querySelectorAll(".card__desc");
const img = document.querySelectorAll(".plus");

btn.forEach((button) => {
  button.addEventListener("click", function () {
    const section = button.dataset.section;

    if (desc[section - 1].classList.contains("answer")) {
      img[section - 1].src = "./assets/images/icon-minus.svg";
      desc[section - 1].classList.remove("answer");
    } else {
      img[section - 1].src = "./assets/images/icon-plus.svg";
      desc[section - 1].classList.add("answer");
    }
  });
});
