let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
    //rate é a velocidade da fala.
}

mostrarMenuInicial();

let contador = 0;

function verificarChute() {
    let chute = document.querySelector('input').value;
    contador++;

    if (chute == numeroSecreto) {
        mostrarTextoNaTela('h1', "Acertou!");

        let palavraTentativa = contador > 1 ? "tentativas" : "tentativa";

        let mensagemTentativa = `Você descobriu o número secreto com ${contador} ${palavraTentativa}!`
        mostrarTextoNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        mostrarTextoNaTela('h1', "Errou!");

        if (chute > numeroSecreto) {
            mostrarTextoNaTela('p', "O número secreto é menor.");
        } else {
            mostrarTextoNaTela('p', "O número secreto é maior.");
        }
    }
    limparCampo();
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo () {
    let campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    contador = 0;

    mostrarMenuInicial();

    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function mostrarMenuInicial() {
    mostrarTextoNaTela('h1', "Jogo do Número Secreto");
    mostrarTextoNaTela('p', "Digite um número de 1 a 10:");
}