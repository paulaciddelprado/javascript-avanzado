const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";

if (edad === 18) {
  mensaje = "Acaba de cumplir la mayoría de edad";
}

switch (edad) {
  case 18:
    mensaje = "Acaba de cumplir la mayoría de edad";
    break;
  case 25:
    mensaje = "Usted es un adulto";
    break;
  case 70:
    mensaje = "Usted es de la tercera edad";
    break;
  default:
    mensaje = "Está fuera de la mayoría de edad/tercera edad";
    break;
}

document.write(`<p>${mensaje}</p>`);

