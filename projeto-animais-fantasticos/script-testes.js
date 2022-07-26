// const animais = document.getElementById('animais');
// const gridSection = document.getElementsByClassName('grid-section');

// //querySelector pega o primeiro item
// // ^="blabla" pega o item que começa com blabla

// //retorne no console todas as imagens do site
// const todasImgs = document.querySelectorAll('img');
// console.log(todasImgs);


// //retorne no console apenas as imagems que começaram com a palavra imagem
// const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
// console.log(imagensAnimais);

// //selecione todos os links internos (onde o href começa com #)
// const linksInterno = document.querySelectorAll('[href^="#"]');
// console.log(linksInterno);

// //selecione o primeiro h2 dentro de .animais-descricao
// const primeiroH2 = document.querySelector('.animais-descricao h2');
// console.log(primeiroH2);


// //selecione o ultimo p do site
// const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos[paragrafos.length - 1]);



//arrow functions

// const imgs = document.querySelectorAll('img');

// imgs.forEach((imagem, index) => { //1o. item é o elementoHTML ; 2o. elemento é o index(i) ; o 3o. elemento é o próprio array 
//     console.log(imagem, index);
// });

// // ou pode ficar:
// //imgs.forEach((imagem) => console.log(imagem));


// //mostre no console cada paragrafo do site
// const paragrafos = document.querySelectorAll('p');
// paragrafos.forEach((paragrafo) => console.log(paragrafo));


// //mostre o texto dos parágrafos no console
// paragrafos.forEach((paragrafo) => console.log(paragrafo.innerText));

// é uma boa prática separar a função de callback do AddEVentListener, assim:
// const img = document.querySelector('img');

// function callback() {
//     console.log('clicou');
// }



// img.addEventListener('click', callback);

// const img = document.querySelector('img');
// console.log(img.type);
// // const h1 = document.querySelector('h1');


// function callback(event) {
//      console.log(event.type);
//}

// function callback2(e) {
//     if (e.key === 'f') {
//         document.body.classList.toggle('muda-cor');
//     }
// }

//img.addEventListener('click', callback);
// window.addEventListener('resize', callback);
// window.addEventListener('keydown', callback2);