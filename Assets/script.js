const primaryNav = document.querySelector(".left");
const navToggle = document.querySelector(".navButtonToggle");
const navList = document.querySelectorAll(".display");
const nameHeader = document.querySelector(".nameHolder");

const resumeToggle = document.querySelector(".myResume");
const pdfHolder = document.querySelector(".pdfHolder");
const resume = document.querySelector(".resume");

const myResume = document.querySelector('.myResume');
const contactMe = document.querySelector('.contactMe');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "true") {
        navToggle.setAttribute("aria-expanded", false)
        pdfHolder.setAttribute('aria-controls', 'pdf-closed')
        primaryNav.setAttribute('data-visible', false)
        nameHeader.setAttribute("aria-expanded", false)
        for (var i=0; i < navList.length; i++) {
            navList[i].setAttribute('data-visible', false)
        }
        
    }
    else {
        primaryNav.setAttribute('data-visible', true)
        pdfHolder.setAttribute('aria-controls', 'pdf-open')
        navToggle.setAttribute("aria-expanded", true)
        nameHeader.setAttribute("aria-expanded", true)
        for (var i=0; i < navList.length; i++) {
            navList[i].setAttribute('data-visible', true)
        }
    }
});


resumeToggle.addEventListener('click', () => {
    const visibility = pdfHolder.getAttribute('data-visible');
    if (visibility === "false") {
        pdfHolder.setAttribute('data-visible', true)
        resume.setAttribute('data-visible', true)
    } else {
        pdfHolder.setAttribute('data-visible', false)
        resume.setAttribute('data-visible', false)
    }
});


myResume.addEventListener('click', () => {
    const active = myResume.getAttribute('aria-expanded');
    if (active === "false") {
        for (var i=0; i < navList.length; i++) {
            navList[i].setAttribute('aria-expanded', false)
        }
            myResume.setAttribute('aria-expanded', true)
    } else {
        for (var i=0; i < navList.length; i++) {
        navList[i].setAttribute('aria-expanded', false)
    }
    }
})

contactMe.addEventListener('click', () => {
    const active = contactMe.getAttribute('aria-expanded');
    if (active === "false") {
        for (var i=0; i < navList.length; i++) {
            navList[i].setAttribute('aria-expanded', false)
        }
            contactMe.setAttribute('aria-expanded', true)
    } else {
        for (var i=0; i < navList.length; i++) {
        navList[i].setAttribute('aria-expanded', false)
    }
    }
})

navList.forEach(element => {
    element.addEventListener('click', () => {
const conditionCheck = myResume.getAttribute('aria-expanded')
    if (conditionCheck === 'false') {
        pdfHolder.setAttribute('data-visible', 'false')
    } else {
        pdfHolder.setAttribute('data-visible', 'true')
    }
})
})
