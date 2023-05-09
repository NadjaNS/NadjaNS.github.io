const menuBtn = document.querySelector(`.menu-btn`);
const menu = document.querySelector(`.menu`);
const menuNav = document.querySelector(`.menu-nav`);
const menuImg = document.querySelector(`.menu-image`);
const navItems = document.querySelectorAll(`.menu-item`);

//se initial set of menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add(`close`);
    menu.classList.add(`show`);
    menuNav.classList.add(`show`);
    menuImg.classList.add(`show`);
    navItems.forEach((item) => item.classList.add(`show`));

    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove(`close`);
    menu.classList.remove(`show`);
    menuNav.classList.remove(`show`);
    menuImg.classList.remove(`show`);
    navItems.forEach((item) => item.classList.remove(`show`));
    showMenu = false;
  }
}
