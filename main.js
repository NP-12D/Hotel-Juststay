let burger = document.querySelector(".burger");
let list = document.querySelector(".header_menu ul");
let listitems = document.querySelectorAll(".header_menu ul li");


function toggleBurgerMenu() {
  document.body.classList.toggle("no_scroll");
  list.classList.toggle("burgerul");
  burger.classList.toggle("burgerstyle");
  burger.classList.toggle("active");
}
burger.addEventListener("click", function () {
  toggleBurgerMenu();
  if (list.classList.contains("burgerul")) {
    listitems.forEach((item) => {
      item.addEventListener("click", toggleBurgerMenu);
    });
  } 
});
