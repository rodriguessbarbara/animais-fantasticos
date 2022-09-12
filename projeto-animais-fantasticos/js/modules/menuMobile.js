import handleOutsideClick from './outsideClick.js';

export default function chamaMenuMobile() {
  const buttonMenu = document.querySelector('[data-menu="button"]');
  const listMenu = document.querySelector('[data-menu="list"]');
  
  function abrirMenuMobile(event) {
    // if (buttonMenu.classList.contains('ativo') && (listMenu.classList.contains('ativo'))) {
    //   handleOutsideClick(listMenu, () => {
    //     listMenu.classList.remove('ativo');
    //     buttonMenu.classList.remove('ativo');
    //   });
    // }
  
    listMenu.classList.toggle('ativo');
    buttonMenu.classList.toggle('ativo');
  }
  
  buttonMenu.addEventListener('click', abrirMenuMobile);
}