let listaDeNumerosSorteados = [];
let limiteDeNumeros = 100;
let numeroSecreto =  gerarNumeroRandom();
let tentativas = 1;

console.log(numeroSecreto);

function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMsgInc() {
        textoNaTela('h1', 'Jogo do número secreto!');
        textoNaTela('p', 'Escolha um número de 1 a 100');
}

exibirMsgInc();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        textoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!'
        let mensagemTentativa = `Parabéns você acertou! Com ${tentativas} ${palavraTentativa}`;
        textoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > chute) {
        textoNaTela('h1', 'Errou!');
        textoNaTela('p', 'O número secreto é maior!');
    } else {
        textoNaTela('h1', 'Errou!');
        textoNaTela('p', 'O número secreto é menor!');
    }
    tentativas++;
    limparCampo()
    }
}

function gerarNumeroRandom() {
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1 );
    let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroRandom();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroRandom();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    exibirMsgInc();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}