'use strict';
// navbar toggle
const overlay  = document.querySelector("[data-overlay]");
const navOpenbtn  = document.querySelector("[data-nav-open-btn]");
const navbar  = document.querySelector("[data-navbar]");
const navClosebtn = document.querySelector("[data-nav-close-btn]");
const navElemArr = [overlay, navOpenbtn, navClosebtn];
for(let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function (){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

// add active class on header when scrolled 200px from top
const header  = document.querySelector("[data-header]");
window.addEventListener("scroll", function (){
    window.scrollY >200 ? header.classList.add("active"): header.classList.remove("active");
} )