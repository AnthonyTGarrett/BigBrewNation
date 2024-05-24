// Testing this out
function changeCss () {
  var headerElement = document.querySelector("header");
  var navElement = document.querySelector(".main-nav");
  var logoElement = document.querySelector(".main-logo");
  var featureList = document.querySelectorAll(".feature img");

  if(this.scrollY > 50) {
    headerElement.style.position = "Fixed";
    headerElement.style.backgroundColor = "rgba(255,255,255,0.5)";
    headerElement.style.padding = "1rem 10rem";
    headerElement.style.minWidth = "100%";
    logoElement.style.maxWidth = "10rem";
    document.getElementById("logo").src="../img/logo-blue.png";
  } else {
    headerElement.style.position = "Static";
    headerElement.style.backgroundColor = "transparent";
    headerElement.style.padding = "1.8rem 12rem";
    headerElement.style.minWidth = "100%";
    logoElement.style.maxWidth = "16rem";
    document.getElementById("logo").src="../img/logo-white.png";
  }

  if(this.scrollY > 300) {
    featureList.forEach(el => {
      el.style.display = "block"; 
      });
  }
}
window.addEventListener("scroll", changeCss , false);