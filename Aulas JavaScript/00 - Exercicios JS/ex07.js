
const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
    const numeroPar = numeros[i];
    if (numeroPar % 2 === 0) {
        console.log(numeroPar);
    }
}