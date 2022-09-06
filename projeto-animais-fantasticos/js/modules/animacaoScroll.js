export default function chamaAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const metadeDaTela = window.innerHeight * 0.6;

  function animaScroll() {
      sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top - metadeDaTela; //getboudingclientrect pega a distancia do topo da section até o topo da tela
          if (sectionTop < 0) {
              section.classList.add('ativo');
              console.log(sectionTop);
          }
      })
  }

  animaScroll();
  window.addEventListener('scroll', animaScroll);
}