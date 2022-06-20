"use strict"


const sidenav = document.querySelector('.sidenav')
const mobileNav = document.querySelector('.mobilenav')

console.log(sidenav)

sidenav.addEventListener("click", function() {
  sidenav.classList.toggle('active')
  mobileNav.classList.toggle('show')
})
