export default function chamaScrollSuave() {
  function scrollSection(event) {
      event.preventDefault();

      const href = event.currentTarget.getAttribute('href'); //aqui pega só o nome do id
      const section = document.querySelector(href); //pega a section inteira a partir do nome do id

      section.scrollIntoView({
          behavior: 'smooth',
      })
  }

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  linksInternos.forEach((link) => {
      link.addEventListener('click', scrollSection);
  })
}