export default function handleOutsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';


  function outsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, outsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    console.log('funfou');

    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, outsideClick));
    });
    element.setAttribute(outside, '');
  }
}