import handleOutsideClick from './outsideClick.js';

export default function chamaDropDown() {
  const menusDropDown = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('ativo');
    handleOutsideClick(this, () => {
      this.classList.remove('ativo');
    });
  }
  
  menusDropDown.forEach(menu => {
    menu.addEventListener('click', handleClick);
    menu.addEventListener('touchstart', handleClick);
  });
  
}