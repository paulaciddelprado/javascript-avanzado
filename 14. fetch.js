/* Nos permite hacer peticiones http desde JS 
JSON = JavaScript Object Notation*/

const peticion = fetch ("https://jsonplaceholder.typicode.com/comments")
.then(resp => resp.json()). then (data=> {
    console.log (data);
});

console.log (peticion);