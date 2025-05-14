let listaDeNumSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'O número secreto é entre 1 e 10.';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto 
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'O número secreto é entre 1 e 10.');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value; // ! Pega o valor do input com .value

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }   
        limparCampo();
        tentativas++;
    }
};

function gerarNumeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite ) {
        listaDeNumSorteados = [];
    }

    if (listaDeNumSorteados.includes(numEscolhido)) { // includes(especifico no JS) verifica se o valor ta na lista
        return gerarNumeroAleatorio();
    } else {
        listaDeNumSorteados.push(numEscolhido);
        return numEscolhido;
    }
}; 

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};