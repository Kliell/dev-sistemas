const novasCores = {
    'caixa1': { nome: 'Amarelo', corHex: 'yellow' },
    'caixa2': { nome: 'Roxo', corHex: 'purple' },
    'caixa3': { nome: 'Laranja', corHex: 'orange' }
};

const caixas = document.querySelectorAll('.caixa');

function tratarDuploClique() {
    console.log(this);

    const idCaixa = this.id;
    const informacaoCor = novasCores[idCaixa];

    this.style.backgroundColor = informacaoCor.corHex;

    alert(`A nova cor da caixa é ${informacaoCor.nome}!`);
}

caixas.forEach(function(caixa) {
    caixa.addEventListener('dblclick', tratarDuploClique);
});