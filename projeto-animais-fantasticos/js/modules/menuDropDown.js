import handleOutsideClick from "./outsideClick.js";

export default class chamaDropDown {
  constructor(dropdownMenu) {
    this.menusDropDown = document.querySelectorAll(dropdownMenu);
    this.classeAtiva = "ativo";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.toggle(this.classeAtiva);
    handleOutsideClick(element.currentTarget, () => {
      element.classList.remove("ativo");
    });
  }

  addEventDropDown() {
    this.menusDropDown.forEach((menu) => {
      menu.addEventListener("click", this.handleClick);
      menu.addEventListener("touchstart", this.handleClick);
    });
  }

  init() {
    if (this.menusDropDown.length) {
      this.addEventDropDown();
    }
    return this;
  }
}
