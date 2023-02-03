function menuShow(){
  let menuListMobile = document.querySelector('.menu-list-mobile');
  if(menuListMobile.classList.contains('open')){
    menuListMobile.classList.remove('open');
    document.querySelector('.icon').src = "./img/menu_white_36dp.svg";

  }else{
    menuListMobile.classList.add('open');
    document.querySelector('.icon').src = "./img/close_white_36dp.svg";
  }
}