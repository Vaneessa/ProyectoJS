//Ej1

let pregUno = prompt("Elegi el tipo de pantalón: jean o de gabardina?");
let pregDos = prompt("Elegi el talle disponible para este modelo: small o large?");


if ((pregUno == "jean" && pregDos == "small") || (pregUno == "JEAN" && pregDos == "SMALL"))  {
  alert("Genial! Tenemos stock!");
} else {
  alert("Ups, no tenemos stock disponible!");
}

//Ej 2

const pantalon = { estilo: "Foxy",
                   talle: 39,
                   tela: "jean",
                   color: "rojo"};


const pantalon1 = { estilo: "Flower",
                   talle: 36,
                   tela: "jean",
                   color: "azul"};   
                   
const pantalon2 = { estilo: "Summer",
                   talle: 28,
                   tela: "jean",
                   color: "amarillo"};

const pantalon3 = { estilo: "Spring",
                   talle: 39,
                   tela: "jean",
                   color: "rojo"};

console.log(pantalon3.talle);
console.log(pantalon1.tela);
console.log(pantalon2.estilo.toUpperCase());


//Ej3

function Short(estilo, talle, tela, color) {
   this.estilo = estilo;
   this.talle 	 = talle;
   this.tela  = tela;
   this.color = color;
}
const ShortUno = new Short("Pepe1", 1, "algodon", "violeta");
const ShortDos = new Short("Pepe2", 2, "jean", "celeste");
const ShortTres = new Short("Pepe3", 2, "gabardina", "negro");

console.log(ShortUno);
console.log(ShortDos);
console.log(ShortTres);



// Ej4

let remeras = [
   {
     "color": "blanco",
     "tipo": "algodón",
     "talle": 1
   },
   {
     "color": "rojo",
     "tipo": "seda",
     "talle": 5
   },
   {
      "color": "azul",
      "tipo": "modal",
      "talle": 2
   },
   {
      "color": "azul",
      "tipo": "lycra",
      "talle": 3
   }
 ]
 
 
 let remerasColor = remeras.filter(remera => remera.color === "rojo");
console.log(remerasColor);

//Ej5

const prendasUno = ["pollera", "saco", "bufanda","pañuelo"];
const prendasDos = ["guante","campera","bota"];
const nuevoArray = prendasUno.concat(prendasDos);

nuevoArray.push('cartera');

console.log(nuevoArray);
console.log(nuevoArray.length);


