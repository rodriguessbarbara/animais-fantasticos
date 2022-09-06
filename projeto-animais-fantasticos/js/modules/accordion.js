export default function chamaAccordion() {
  const accordionLista = document.querySelectorAll('.js-accordion dt');
  const classeAtivo = 'ativo';

  accordionLista[0].classList.add(classeAtivo);
  accordionLista[0].nextElementSibling.classList.add(classeAtivo);

  function ativarAccordion() {
      this.classList.add(classeAtivo);
      this.nextElementSibling.classList.toggle(classeAtivo);
  }

  accordionLista.forEach((item) => {
      item.addEventListener('click', ativarAccordion);
  })
}