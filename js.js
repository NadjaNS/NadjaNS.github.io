const btnOpen = document.querySelector(`.btn-open`);
const navigation = document.querySelector(`.nav-close`);
const closeNav = document.querySelector(`.navigation`);
const btnClose = document.querySelector(`.btn-close`);

btnOpen.addEventListener(`click`, openNavigation);
btnClose.addEventListener(`click`, closeNavigation);

function openNavigation() {
  navigation.style.display = `block`;
  btnOpen.style.visibility = `hidden`;
  btnClose.style.visibility = `visible`;
}

function closeNavigation() {
  btnClose.style.visibility = `hidden`;
  btnOpen.style.visibility = `visible`;
  navigation.style.display = `none`;
}
