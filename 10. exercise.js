let num = parseInt(prompt("Ingrese un numero: "));
i = 0;
prom = 0;
const nums = [];
while (num >= 0) {
  i++;
  prom = prom + num;
  nums.push(num);
  num = parseInt(prompt("Ingrese un numero: "));
}

document.write(`Suma ${prom}`);
document.write(`<br/>Promedio ${prom / i}`);
document.write(`<br/>Numeros ingresados ${nums}`);