// Testing this out


function changeCss () {
  var headerElement = document.querySelector("header");
  var logoElement = document.querySelector(".main-logo");
  var featureList = document.querySelectorAll(".feature *");

  if(this.scrollY > 80) {
    headerElement.style.position = "Fixed";
    headerElement.style.backgroundColor = "rgba(255,255,255,0.4";
    headerElement.style.padding = "0.4rem 10rem";
    headerElement.style.minWidth = "100%";
    logoElement.style.maxWidth = "10rem";

  } else {
    headerElement.style.position = "Static";
    headerElement.style.backgroundColor = "transparent";
    headerElement.style.padding = "1.8rem 12rem";
    headerElement.style.minWidth = "100%";
    logoElement.style.maxWidth = "16rem";

  }

  if(this.scrollY > 300) {
    featureList.forEach(el => {
      el.style.opacity = "100"; 
      });
  } else {
    featureList.forEach(el => {
      el.style.opacity = "0"; 
      });
  }
}
window.addEventListener("scroll", changeCss , false);

let dateElement = document.querySelector(".date");
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${month}-${day}-${year}`;

document.addEventListener("DOMContentLoaded", (event) => {
  dateElement.innerHTML = currentDate;
});

let chevron = document.querySelector(".chevron-down");
let scrollElement = document.querySelector(".section-beers");
function chevronClick() {
  scrollElement.scrollIntoView({ behavior: "smooth", inline: "nearest" });
}
chevron.addEventListener("click", chevronClick, false);