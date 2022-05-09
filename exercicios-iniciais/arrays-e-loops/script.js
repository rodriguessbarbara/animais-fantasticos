let frutas = ['Banana', 'Laranja', 'Morango', 'Uva', 'Pera', 'Maça'];

frutas.forEach(function (fruta) {
    console.log(fruta);
//os argumentos do forEAch são dinamicos, ou seja, incrementam sozinhos
});


//crie um array c os anos que o Brasil ganhou a copa
let brasilCampeao = [1958, 1962, 1970, 1994, 2002];


//intereja c/ o array utilizando um loop p/ mostrar no console a seguinte mensagem:
//'o brasil ganhou a copa de ${ano}'
brasilCampeao.forEach(function (ano) {
    console.log("O Brasil ganhou a copa de " + ano)
})


//interaja com um loop nas frutas abaixo e para ao chegar em Pera
let frutas2 = ['Banana', 'Maça', 'Pera', 'Uva', 'Melancia'];
for (let i = 0; i < frutas2.length; i++) {
    console.log(frutas2[i])
    if (frutas2[i] === "Pera") {
        break;
    }
}


//coloque a ultima fruta da array acima em uma variavel, sem remover a mesma da array
let ultimaFruta = frutas2[frutas2.length - 1];


var possuiCarro = true;
var possuiCasa = true;
let darCredito;
darCredito = (possuiCarro && possuiCasa) ? 'Liberar crédito ao cliente' : 'Negar crédito';