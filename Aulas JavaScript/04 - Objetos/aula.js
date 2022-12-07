

class candidato {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;

    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} o ano que nasci foi ${this.anoDeNascimento}`);
    }
}


function compararCandidatos(cand1, cand2) {
    if (cand1.idade > cand2.idade) {
        console.log(`${cand1.nome} é mais velho(a) que ${cand2.nome}`);
    } else if (cand2.idade > cand1.idade) {
        console.log(`${cand2.nome} é mais velho(a) que ${cand1.nome}`);
    } else {
        console.log(`${cand1.nome} e ${cand2.nome} tem a mesma idade`);
    }
}

const wash = new candidato('Washington Luiz', 27);
const jose = new candidato('Jose S Silva', 30);

compararCandidatos(wash, jose);