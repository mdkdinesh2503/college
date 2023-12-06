// Responsive menu bar script

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

function coursePage() {
  var hideVisible1 = document.getElementById("courseVisible1");
  var hideVisible2 = document.getElementById("courseVisible2");
  var hideVisible3 = document.getElementById("courseVisible3");
  var buttonHidden = document.getElementById("buttonHidden");

  hideVisible1.style.display = "block";
  hideVisible1.style.visibility = "visible";
  hideVisible2.style.display = "block";
  hideVisible2.style.visibility = "visible";
  hideVisible3.style.display = "block";
  hideVisible3.style.visibility = "visible";
  buttonHidden.style.display = "none";
  buttonHidden.style.visibility = "hidden";
  return true;
}

function blogsPage() {
  var hideVisible1 = document.getElementById("blogsVisible1");
  var hideVisible2 = document.getElementById("blogsVisible2");
  var hideVisible3 = document.getElementById("blogsVisible3");
  var buttonHidden = document.getElementById("buttonHidden");
  
  hideVisible1.style.display = "block";
  hideVisible1.style.visibility = "visible";
  hideVisible2.style.display = "block";
  hideVisible2.style.visibility = "visible";
  hideVisible3.style.display = "block";
  hideVisible3.style.visibility = "visible";
  buttonHidden.style.display = "none";
  buttonHidden.style.visibility = "hidden";
  return true;
}
