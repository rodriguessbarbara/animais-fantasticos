export default function chamaModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
    
    function foraModal(event) {
      // this é a section e event.target é o que foi clicado,
      // se for clicado foraModal, o event vai ser a própria section
    
      if (event.target === this) toggleModal(event);
    }
    
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', foraModal);
  }
}