export default class chamaScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
  }

  scrollSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href"); //aqui pega só o nome do id
    const section = document.querySelector(href); //pega a section inteira a partir do nome do id

    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", (event) => this.scrollSection(event));
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
