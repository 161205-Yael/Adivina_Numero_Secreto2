const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./Adivinanza');
const obtenerNumeroUsuario = () => {
    return parseInt(readlineSync.question('Ingresa un numero: '), 10);
};
const juegoAdivinanza = () => {
const numeroSecreto = generarNumeroAleatorio();
let numeroAdivinado = 0;
console.log('¡Bienvenido a Adivina el número secreto!');
console.log('Intenta adivinar el número del 1 al 100.\n');
while (numeroAdivinado !== numeroSecreto) {
numeroAdivinado = obtenerNumeroUsuario();
verificarAdivinanza(numeroSecreto, numeroAdivinado);
}
};
juegoAdivinanza();