const $btnCat = document.querySelector ("#btnCat");
const divCats = document.querySelector ("#cats");

$btnCat.addEventListener ("click", () => {
    fetch/("https://api.thecatapi.com/v1/images/search")
    .then(resp => resp.jason()) .then(data => {
        console.log (data);
        const imgCat = document.createElement ("img");
        imgCat.src
    }
}