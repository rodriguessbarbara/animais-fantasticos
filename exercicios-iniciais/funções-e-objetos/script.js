//crie uma função p verificar se um valor é Truthy
function isTruthy(dado) {
    return !!dado;
}

//crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
    return lado*4;
}

//crie uma função que retorne o seu nome completo
function nomeCompleto(nome, sobrenome) {
    return "Nome completo: " + nome + ' ' + sobrenome;
}

//crie uma função que verifica se um número é par
function VerificaPar (num) {

    if (num % 2 == 0) {
        return "O numero é par";
    } else {
        return "O numero é impar";
    }
}

//crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function tipoDado (dado) {
    return typeof dado;
}


//addEventListener é uma função nativa do JS, o primeiro parametro é o evento que ocorre e o segundo o Callback
//utilize essa função p mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
    console.log("Barbara Mendes");
})

//objetos

var pessoa = {
    nome: 'barbara',
    idade: 20,
    cidade: 'são paulo'
}

pessoa.nome;

let quadradro = {
   lados: 4,
   area: function(lado) { //ou area(lado) {}
       return lado * lado;
   }, 
   perimetro: function(lado) {
       return lado * this.lados;
   }
}

console.log(quadradro.area(5));
console.log(quadradro.perimetro(5));

//crie um objeto com seus dados pessoais
var eu = {
    nome: 'Barbara',
    sobrenome: 'Mendes',
    idade: 20,
    cidade: 'São Paulo',
}

//crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function() {
    return 'nome completo: ' + this.nome + ' ' + this.sobrenome;
}

//modifique o valor da propriedade preco para 3000
let carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 300;

//crie um objeto de um cachorro que represente um labrador preto c/ 10 anos, que late ao ver um homem

let cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir: function(pessoa) {
        if (pessoa === 'homem') {
            return 'Late';
        } else {
            return 'Não late';
        }
    },
}

//nomeie 3 propriedades ou métodos de strings
let nome = 'Bárbara';
nome.replace()
nome.charAt(5);
nome.indexOf();

//nomeie 3 propriedades ou metodos de elementos do DOM
let btn = document.querySelector('.btn');
//classList;
//addEVentListener;
//getAttribute

//busque na web um objeto (método) capaz de interagir com o clipboard,
//clipboard é a parte do PC que lida c/ o CTRL + C e CTRL + V

//tem uma biblioteca JS para isso (o nome é clipboard.js e é preciso baixar)