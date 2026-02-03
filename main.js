let burger = document.querySelector(".burger");
let list = document.querySelector(".header_menu ul");
let listitems = document.querySelectorAll(".header_menu ul li");
burger.addEventListener("click", togelforlist);
burger.addEventListener("click", function(){

});

function togelforlist() {
  document.body.classList.toggle("no_scroll");
  list.classList.toggle("burgerul");
  burger.classList.toggle("burgerstyle");
  burger.classList.toggle("active");
  
}
burger.addEventListener("click", togelforlist);
listitems.forEach((item) => {
  item.addEventListener("click", togelforlist);
});
