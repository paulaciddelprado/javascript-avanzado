const nombre = prompt ("¿Cuál es tu nombre?"); 
const edad = prompt ("¿Cuál es tu edad?")

console.log ("Hola " + nombre + " saludos. Tu edad es " + edad + " años");

/* Una manera de mostrar la información en html es con console.log o también mandar con una const y document.wirte donde incluso pueda decidir en donde se va a mostrar, ya que si ponemos el mismo código de ubicación en console, todo lo toma como texto y no se imprime correctamente*/


const saludo = `<h1> Hola ${ nombre } saludos. <br/> Tu edad es ${ edad } años. </h1>`;
document.write (saludo);
