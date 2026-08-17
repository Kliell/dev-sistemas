const precoProduto = 20;
const quantidade = 3;

const totalCompra = precoProduto * quantidade;
const dobroTotal = totalCompra * 2;
const restoDivisao = totalCompra % 2;

console.log("OPERAÇÕES ARITMÉTICAS");
console.log("Total da Compra:", totalCompra);
console.log("Dobro do Total:", dobroTotal);
console.log("Resto da Divisão por 2:", restoDivisao);

const cupomValido = true;
const freteGratis = false;

const temAlgumBeneficio = cupomValido || freteGratis;
const temTodosBeneficios = cupomValido && freteGratis;

console.log("\nOPERAÇÕES LÓGICAS");
console.log("Algum Benefício (OU):", temAlgumBeneficio);
console.log("Todos os Benefícios (E):", temTodosBeneficios);

document.getElementById('preco').textContent = precoProduto.toFixed(2);
document.getElementById('quantidade').textContent = quantidade;
document.getElementById('total').textContent = totalCompra.toFixed(2);
document.getElementById('dobro').textContent = dobroTotal.toFixed(2);
document.getElementById('resto').textContent = restoDivisao;

document.getElementById('cupom').textContent = cupomValido ? "Sim" : "Não";
document.getElementById('frete').textContent = freteGratis ? "Sim" : "Não";
document.getElementById('algum').textContent = temAlgumBeneficio ? "Sim" : "Não";
document.getElementById('todos').textContent = temTodosBeneficios ? "Sim" : "Não";