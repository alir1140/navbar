// GET ELEMENT
const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

// TOGGLE
navToggle.addEventListener("click",()=>{
  links.classList.toggle("show-links")
})