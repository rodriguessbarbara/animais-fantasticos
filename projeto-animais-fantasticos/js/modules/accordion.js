export default class chamaAccordion {
  constructor(list) {
    this.accordionLista = document.querySelectorAll(list);
    this.classeAtivo = "ativo";
  }

  toggleAccordion(item) {
    item.classList.add(this.classeAtivo);
    item.nextElementSibling.classList.toggle(this.classeAtivo);
  }

  addAccordionEvent() {
    this.accordionLista.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  //iniciar função
  init() {
    if (this.accordionLista.length) {
      //ativa primeiro item:
      this.toggleAccordion(this.accordionLista[0]);
      this.addAccordionEvent();
    }
  }
}
