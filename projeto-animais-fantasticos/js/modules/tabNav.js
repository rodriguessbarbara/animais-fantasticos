export default class chamaTabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu);
    this.tabcontent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  activeTab(index) {
    this.tabcontent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabcontent[index].dataset.anime;
    this.tabcontent[index].classList.add(this.activeClass, direcao);
  }

  addTabNavEVent() {
    this.tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      //ativa primeiro item
      this.activeTab(0);
      this.addTabNavEVent();
    }
    return this;
  }
}
