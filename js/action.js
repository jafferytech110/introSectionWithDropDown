//variables to be used as display
let featureMenu = document.getElementById('feature-menu')
let companyMenu = document.getElementById('company-menu')
let backDrop = document.querySelector('.backdrop')
let overlayMenu = document.querySelector('.overlay-menu')
let featureSmallMenu = document.querySelector('.features-small-menu')
let companySmallMenu = document.querySelector('.company-small-menu')


//variables to be clicked
let featureButton = document.getElementById('features')
let companyButton = document.getElementById('company')
let hamburgerMenu = document.getElementById('hamburger')
let closeMenu = document.querySelector('.close-menu')
let featureSmallButton = document.querySelector('#small-features')
let companySmallButton = document.querySelector('#small-company')


featureButton.addEventListener('click',showMenuF)
companyButton.addEventListener('click',showMenuC)
hamburgerMenu.addEventListener('click',showOverlayMenu)
closeMenu.addEventListener('click',hideOverlayMenu)
featureSmallButton.addEventListener('click',showSmallMenu)
companySmallButton.addEventListener('click',showSmallCompanyMenu)

function showMenuF(e){
        if(featureMenu.style.display == 'none') {
            featureMenu.style.display = 'flex'
        } else {
            featureMenu.style.display = 'none'
        }
}

function showMenuC(e){
    if(companyMenu.style.display == 'none') {
        companyMenu.style.display = 'flex'
    } else {
        companyMenu.style.display = 'none'
    }
}

function showOverlayMenu(e){
    backDrop.style.display = "block";
    overlayMenu.style.display = 'flex'
}

function hideOverlayMenu(e){
    backDrop.style.display = "none";
    overlayMenu.style.display = 'none'
}
function showSmallMenu(e){
    if(featureSmallMenu.style.display == 'none') {
        featureSmallMenu.style.display = 'flex'
    } else {
        featureSmallMenu.style.display = 'none'
    }   
}
function showSmallCompanyMenu(e){
    if(companySmallMenu.style.display == 'none') {
        companySmallMenu.style.display = 'flex'
    } else {
        companySmallMenu.style.display = 'none'
    }
}