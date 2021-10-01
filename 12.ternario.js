/* Operador ternario. Forma abreviada de utilizar el if. Sirve para evaluar una condición. Es una estructura de flujo */

const edad = 15;

/* if (edad >= 18) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres menor de edad");

} */

const mensaje = edad > 18 ? "Eres mayor de edad" : "Eres menor de edad";

document.write (`<p>${mensaje}</p>`);