/* Funciones de flecha */

console.log(suma(37, 32));

function suma(num1, num2) {
    return num1 + num2;
}

/* Función de flecha, otra forma de escribir una función. Se debe poner la impresión después de declararla*/
const suma1 = (num1, num2) => {
    return num1 + num2;
}

console.log (suma1(24, 305));

document.write (`<p>${suma (5, 8)}</p>`);