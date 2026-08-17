const nomeJogador = "Alex";                     
let idade = 22;                                  
let estaOnline = true;                         

const jogoFavorito = {                          
    nome: "The Witcher 3",
    anoLancamento: 2015
};

const ultimasPontuacoes = [850, 920, 780];       

console.log("--- Ficha Inicial do Jogador ---");
console.log("Nome:", nomeJogador, "| Tipo:", typeof nomeJogador);
console.log("Idade:", idade, "| Tipo:", typeof idade);
console.log("Online:", estaOnline, "| Tipo:", typeof estaOnline);
console.log("Jogo Favorito:", jogoFavorito, "| Tipo:", typeof jogoFavorito);
console.log("Pontuações:", ultimasPontuacoes, "| Tipo:", typeof ultimasPontuacoes);


idade = 23;            
estaOnline = false;    

console.log("\nApós Alterações de Idade e Status");
console.log("Nova Idade:", idade);
console.log("Novo Status Online:", estaOnline);
const somaPontos = ultimasPontuacoes[0] + ultimasPontuacoes[1] + ultimasPontuacoes[2];
const mediaPontos = somaPontos / ultimasPontuacoes.length;

console.log("\n--- Desafio Extra ---");
console.log(`A média de pontos do jogador ${nomeJogador} foi: ${mediaPontos.toFixed(1)}`);