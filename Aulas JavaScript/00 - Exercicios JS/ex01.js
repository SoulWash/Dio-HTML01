const primeiraNota = 7;
const segundaNota = 8;
const terceiraNota = 7;

const media = (primeiraNota + segundaNota + terceiraNota) / 3;

console.log(media.toFixed(1));

if (media < 5) {
    console.log(`Reprovado`);
} else if (media >= 5 && media <= 7) {
    console.log(`Recuperação`);
} else {
    console.log(`Aprovado`);
}