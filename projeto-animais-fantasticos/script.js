const imgs = document.querySelectorAll('img');

imgs.forEach((imagem, index) => { //1o. item é o elementoHTML ; 2o. elemento é o index(i) ; o 3o. elemento é o próprio array 
    console.log(imagem, index);
});

// ou pode ficar:
//imgs.forEach((imagem) => console.log(imagem));


//mostre no console cada paragrafo do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((paragrafo) => console.log(paragrafo));


//mostre o texto dos parágrafos no console
paragrafos.forEach((paragrafo) => console.log(paragrafo.innerText));
