const precoCombustivel = 6.08;
const kmPorLitros = 12;
const distanciaKM = 180;

const litrosGastos = distanciaKM/kmPorLitros;

const totalGastoNaViagem = precoCombustivel*litrosGastos;

console.log(totalGastoNaViagem.toFixed(2));