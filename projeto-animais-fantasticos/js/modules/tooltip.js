export default function chamaTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  
  function onMouseOver(event) {
    const boxTooltip = criarBoxTooltip(this);
  
    onMouseMove.boxTooltip = boxTooltip;
    this.addEventListener('mousemove', onMouseMove);
  
    this.addEventListener('mouseleave', () => boxTooltip.remove());
    this.removeEventListener('mouseleave', () => boxTooltip.remove());
    this.removeEventListener('mousemove', () => boxTooltip.remove());
  }
  
  const onMouseMove = {
    handleEvent(event) {
      this.boxTooltip.style.top = event.pageY + 20 + 'px';
      this.boxTooltip.style.left = event.pageX + 20 + 'px';  
    }
  }
  
  function criarBoxTooltip(element) {
    const boxTooltip = document.createElement('div');
    const texto = element.getAttribute('aria-label');
    boxTooltip.classList.add('tooltip');
    boxTooltip.innerText = texto;
    document.body.appendChild(boxTooltip);
    return boxTooltip;
  }
  
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}