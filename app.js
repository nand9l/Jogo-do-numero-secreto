let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let Tentativas = 1;
let h1 = 'Jogo do número secreto'
let p = 'escolha um numero entre 1 e 10'



function exibirMensagemInicial(){
    let titulo = document.querySelector('h1');
    titulo.innerHTML = h1;
    let paragrafo = document.querySelector('p');
    paragrafo.innerHTML = p;
    
}
  responsiveVoice.speak(h1,'Brazilian Portugues Female', {rate:1.2});
  exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute==numeroSecreto){
        titulo = document.querySelector('h1');
        titulo.innerHTML = 'Acertou!';
        let palavraTentativa = Tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${Tentativas} ${palavraTentativa}`;
        paragrafo = document.querySelector ('p');
        paragrafo.innerHTML = (mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');}
    
    else {
        if (chute > numeroSecreto){
            titulo = document.querySelector('h1');
            titulo.innerHTML = 'Errou';
            paragrafo = document.querySelector('p');;
            paragrafo.innerHTML = 'O numero secreto é menor'}
        else {
            titulo = document.querySelector('h1');
            titulo.innerHTML = 'Errou';
            paragrafo = document.querySelector('p');
            paragrafo.innerHTML = 'O numero secreto é maior';
        }
        limparCampo ();
     }
     Tentativas++
   
}
    function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];

    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log (listaDeNumerosSorteados)
        return numeroEscolhido;
    
    }
}
    function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
    }
    function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    Tentativas=1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disable',true)
    

    }

    
