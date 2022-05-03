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


//addEventListener é uma função nativa do JS, o primeiro parametro é o evento que occore e o segundo o Callback
//utilize essa função p mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
    console.log("Barbara Mendes");
})