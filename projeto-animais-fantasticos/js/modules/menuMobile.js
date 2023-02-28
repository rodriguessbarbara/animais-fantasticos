import handleOutsideClick from "./outsideClick.js";

export default class chamaMenuMobile {
  constructor(buttonMenu, listMenu, events) {
    this.buttonMenu = document.querySelector(buttonMenu);
    this.listMenu = document.querySelector(listMenu);
    this.classeAtivo = "ativo";

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.abrirMenuMobile = this.abrirMenuMobile.bind(this);
  }

  abrirMenuMobile() {
    this.listMenu.classList.add(this.classeAtivo);
    this.buttonMenu.classList.add(this.classeAtivo);

    handleOutsideClick(this.listMenu, this.events, () => {
      this.listMenu.classList.remove(this.classeAtivo);
      this.buttonMenu.classList.remove(this.classeAtivo);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((evento) =>
      this.buttonMenu.addEventListener(evento, this.abrirMenuMobile)
    );
  }

  init() {
    if (this.buttonMenu && this.listMenu) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
