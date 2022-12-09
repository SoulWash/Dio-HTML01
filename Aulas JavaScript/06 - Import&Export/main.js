

const {gets, print} = require('./aula');

const quantidadeDeAlunos = gets();

let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorte = gets();
    if (numeroSorte > maiorValor) {
        maiorValor = numeroSorte;
    }
}

print(maiorValor);