const burgerBtn = document.querySelector(".nav__burger-btn");
const navHideMenu = document.querySelector(".nav__hide-menu")

let burgerFlagOpen = false;

burgerBtn.addEventListener("click" , btnopen);

function btnopen () {
   if(burgerFlagOpen){
    burgerBtn.classList.remove("nav__burger-btn--open");
    navHideMenu.classList.remove("nav__hide-menu--open");
    burgerFlagOpen = false;
   }else{
    burgerBtn.classList.add("nav__burger-btn--open");
    navHideMenu.classList.add("nav__hide-menu--open");
    burgerFlagOpen = true;
   }
}

