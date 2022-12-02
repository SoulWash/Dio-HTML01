
const precoEtanol = 3.69;
const precoGasolina = 6.08;
const combustivelUtilizado = 'Etanol';
const gastoCombustivelKM = 10;
const distanciaKM = 100;

const litrosGasto = distanciaKM / gastoCombustivelKM;

if (combustivelUtilizado === 'Etanol') {
    const valorGasto = litrosGasto * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosGasto * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
