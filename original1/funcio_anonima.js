//- Nivell 3 - Exercici 2
//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre.

/* //OPCIÓ 1: ERROR Funcion anónima admite parámetros declarados globalmente como var nom = "Pepito"?
var nom = "Pepito";
const f = (function (nom){
    console.log(`usuari: ${nom}`)
})();
*/

//OPCIÓ 2: 
/*
const f = (function (){
    return "Dani" //`usuari: ${"Dani"}`
})();
console.log(f);
*/

//OPCIÓ 3: 
const f = (function (nom){
    console.log(`usuari: ${nom}`)
})("Dani");