
class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / Math.pow(this.altura,2);
    }

    classificarIMC() {
       const imc = this.calcularIMC();

        if (imc < 18.5) {
            return (`abaixo do peso`);
        } else if (imc >= 18.5 && imc < 25){
            return (`peso normal`);
        } else if (imc => 25 && imc < 30) {
            return (`acima do peso`);
        } else if (imc => 30 && imc < 40) {
            return (`obeso`);
        } else {
            return (`obesidade Grave`);
        }
    }
}

const jose = new Pessoas('Jose Luiz', 70, 1.75);
const matheus = new Pessoas('Matheus Silva', 85, 1.65);

console.log(`O meu nome é ${jose.nome}, peso ${jose.peso}kg e minha altura é ${jose.altura}, meu IMC é de ${jose.calcularIMC().toFixed(2)} ${jose.classificarIMC()}`);

console.log(`O meu nome é ${matheus.nome}, peso ${matheus.peso}kg e minha altura é ${matheus.altura}, meu IMC é de ${matheus.calcularIMC().toFixed(2)} ${matheus.classificarIMC()}`);

 