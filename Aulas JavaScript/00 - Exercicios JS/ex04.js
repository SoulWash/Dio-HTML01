

class Carros {
    marca;
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    gastoDaViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.kmPorLitro * precoCombustivel;
    }
}


const nessa = new Carros('Nessa', 'Vermelho', 1/8);
const honda = new Carros('Honda', 'Cinza', 1/12);

console.log(nessa.gastoDaViagem(70,5.08).toFixed(2));
console.log(honda.gastoDaViagem(70,5.08).toFixed(2));


