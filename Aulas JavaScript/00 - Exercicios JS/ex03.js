

/* Qual o valor do produto?? */
const preçoProduto = 25;

/* Qual a forma de pagamento?? */
const formaDePagamento = 4;

/* Vai parcelar em quantas vezes?? */
const parcelas = 4;


function aplicarDesconto(valor, desconto) {
    return  valor - ( valor * (desconto / 100));
}

function etiquetaJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}


if (formaDePagamento === 1) {
    console.log(`Debito o valor vai ficar de ${aplicarDesconto(preçoProduto, 10).toFixed(2)}`);
} else if (formaDePagamento === 2) {
    console.log(`Dinheiro ou pix a vista o valor fica ${aplicarDesconto(preçoProduto, 15).toFixed(2)}`);
} else if (formaDePagamento === 3) {
    const duasVezes = preçoProduto/2;
    console.log(`Duas parcelas de ${duasVezes.toFixed(2)}`);
} else {
    console.log(`Parcelando em ${parcelas} o valor fica de ${etiquetaJuros(preçoProduto, 10 * parcelas).toFixed(2)}`);
}

