export default function handleOutsideClick(element, callback) {
  const html = document.documentElement;
  
  html.addEventListener('click', function foraClick(event) {
    if (!element.contains(event.target)) {
      console.log('funfou');
        html.removeEventListener('click', foraClick);
        callback();
    }
  });
}