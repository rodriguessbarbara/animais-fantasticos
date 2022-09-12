export default function chamaAnimacaoNumeros() {

}

const numeros = document.querySelectorAll('[data-numero]');

numeros.forEach((numero) => {
  const total = +numero.innerText;
  let start = 0;
  const i = Math.floor(total / 100);

  const timer = setInterval(() => {
    start += i;
    numero.innerText = start;

    if (start > total) {
      numero.innerText = total;
      clearInterval(timer);
    }
  }, 100 * Math.random());
});

function callbackObserver(mutation) {
  console.log('mutation');
}

const observerTarget = document.querySelector('.numeros');
const observer = new MutationObserver(callbackObserver);
observer.observe(observerTarget, {attributes: true});