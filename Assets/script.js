const primaryNav = document.querySelector(".left");
const navToggle = document.querySelector(".navButtonToggle");
const navList = document.querySelectorAll(".display");
const nameHeader = document.querySelector(".nameHolder");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute("aria-expanded", false)
        nameHeader.setAttribute("aria-expanded", false)
        for (var i=0; i < navList.length; i++) {
            navList[i].setAttribute('data-visible', false)
        }
        
    }
    else {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute("aria-expanded", true)
        nameHeader.setAttribute("aria-expanded", true)
        for (var i=0; i < navList.length; i++) {
            navList[i].setAttribute('data-visible', true)
        }
    }
});