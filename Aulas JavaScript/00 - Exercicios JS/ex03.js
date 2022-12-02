/* Qual o valor do produto?? */
const preçoProduto = 25;

/* Qual a forma de pagamento?? */
const formaDePagamento = 4;

/* Vai parcelar em quantas vezes?? */
const quantasVezes = 2;

if (formaDePagamento === 1) {
    const debito =  preçoProduto - (10 * preçoProduto / 100);
    console.log(`Como Debito o valor vai ficar de ${debito.toFixed(2)}`);
} else if (formaDePagamento === 2) {
    const moneyOrPix = preçoProduto - (15 * preçoProduto/100);
    console.log(`Em Dinheiro ou pix a vista o valor fica ${moneyOrPix.toFixed(2)}`);
} else if (formaDePagamento === 3) {
    const duasVezes = preçoProduto/2;
    console.log(`Duas parcelas de ${duasVezes.toFixed(2)}`);
} else {
    const taxaJuros = 10 * preçoProduto/100;
    const ParcelaAcimaDeDuas = preçoProduto + (taxaJuros*quantasVezes);
    console.log(`Parcelando em ${quantasVezes} vezes o valor vai ficar de ${ParcelaAcimaDeDuas.toFixed(2)}`);

}

