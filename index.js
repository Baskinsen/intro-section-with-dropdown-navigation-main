let feat = document.getElementById('feat')
let comp = document.getElementById('company')
const navbar = document.getElementById('nav')
let navToggle = document.querySelector('.toggle')

const feature = () => {
    if(feat.style.display === "none" ) {
        feat.style.display = 'block'
        document.getElementById("arrowdn").src = "images/icon-arrow-up.svg"
    } else {
        feat.style.display = 'none'
        document.getElementById("arrowdn").src = "images/icon-arrow-down.svg"
    }
}

const company = () => {
    console.log("working")
    if(comp.style.display === "none") {
        comp.style.display = 'block'
        document.getElementById("arrowdn2").src = "images/icon-arrow-up.svg" 
    } else {
        comp.style.display = 'none'
        document.getElementById("arrowdn2").src = "images/icon-arrow-down.svg" 
    }
}

navToggle.addEventListener('click', ()=> {
    const visibility = navbar.getAttribute('data-visible')
    if(visibility === "false") {
        navbar.setAttribute('data-visible', true)
        navToggle.style.backgroundImage = "url(images/icon-close-menu.svg)"
        navToggle.setAttribute('aria-expanded', true)
    } else {
        navbar.setAttribute('data-visible', false)
        navToggle.style.backgroundImage = 'url(images/icon-menu.svg)'
        navToggle.setAttribute('aria-expanded', false)
    }
})