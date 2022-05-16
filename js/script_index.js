// const newLocal = "#logo_to_use";
const logo_to_use = document.querySelector("#logo_to_use");
const li_v1 = document.querySelector("#li_v1");
const li_v2 = document.querySelector("#li_v2");
const burger_menu = document.querySelector("#burger_menu");
const sorting_obtion = document.querySelector("#sorting_obtion");
const workshop_mobile = document.querySelector("#workshop_mobile");
const workshop_desktop = document.querySelector("#workshop_desktop");



const mediaQuery = window.matchMedia("(max-width: 700px)");
if (mediaQuery.matches) {
  console.log("query1");
  // logo_to_use.classList.add("small_logo");
  burger_menu.classList.add("unhidden");
  // sorting_obtion.classList.add("hidden");
  workshop_desktop.classList.add("hidden");
  // workshop_mobile.classList.add("hidden");
//   document
//     .querySelector(".burgericon")
//     .addEventListener("click", changeDisplay);
}



// function changeDisplay() {
//   document.querySelector(".logo-image").classList.toggle("changeOpacity");
//   document.querySelector(".icons").classList.toggle("changeOpacity");
// }



const mediaQuery2 = window.matchMedia("(min-width: 700px)");
if (mediaQuery2.matches) {
  console.log("query2");
  // logo_to_use.classList.add("big_logo");
  burger_menu.classList.add("hidden");
  // sorting_obtion.classList.remove("hidden");
  li_v1.classList.remove("hidden");
  li_v2.classList.remove("hidden");
  workshop_mobile.classList.add("hidden");
  workshop_desktop.classList.remove("hidden");
}


//   document.querySelector(".asidecontainer").addEventListener("click", addWidth);
//   document.querySelector(".secondhalf").addEventListener("click", addWidth);

