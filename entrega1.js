//Nivell 1 - Exercici 1
//Crea una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre.
let nom = "Pepito";
const showName = x => console.log(x);
showName(nom);

//Nivell 2 - Exercici 1
//Mostra per consola el nom i cognoms de l'usuari mitjançant template literals, 
//guardant-los en variables i referenciant-les en la impressió del missatge.
let nom = "Pepito";
let cognom = "Perez";
const showNames = (x,y) => console.log(`My name is ${x} and my surname is ${y}`);
showNames(nom,cognom);


//Nivell 2 - Exercici 2
//Invoca una funció que retorni un valor des de dins d'una template literal.
/* const suma = (x,y) => `La suma de ${x} y ${y} es ${x*y}`;
console.log(suma(2,5)); */
//CORRECCIÓ 26/01/2022 => Al N2 E2 has d'executar una funció que retorni un valor DINS d'un template literal, no al reves
const t1 = `Bon día. `;
const t2 = `Com estàs?`;
const showConcatenar = (x,y) => console.log(x + y);
showConcatenar(t1,t2);


//Nivell 3 - Exercici 1
//Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. 
//Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.
/* const f0 = function() { return console.log(0) };
const f1 = function() { return console.log(1) };
const f2 = function() { return console.log(2) };
const f3 = function() { return console.log(3) };
const f4 = function() { return console.log(4) };
const f5 = function() { return console.log(5) };
const f6 = function() { return console.log(6) };
const f7 = function() { return console.log(7) };
const f8 = function() { return console.log(8) };
const f9 = function() { return console.log(9) };
const arr = [f0(),f1(),f2(),f3(),f4(),f5(),f6(),f7(),f8(),f9()];
for (x in arr) {return}; */
//CORRECCIÓ 26/01/2022 => El N3 E1 no fa el que diu l'enunciat! has d'omplir i llegir l'array amb bucles, no a mà 
const matriu = [];
const arr = [0,1,2,3,4,5,6,7,8,9];
const f = () => arr.map( x => console.log(x));
for (let i = 0; i <= 9; i++) {
    matriu.push(f)
    matriu[i]()
}

//- Nivell 3 - Exercici 2
//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre.

const f = (function (nom){
    console.log(`usuari: ${nom}`)
})("Dani");
