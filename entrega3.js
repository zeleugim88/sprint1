//Nivell 1 - Exercici 1
//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const missatge = (x) => console.log(x)
let x = 9; //nota en el examen de IT Academy

let miPromesa = new Promise((myResolve, myReject) => {
// The producing code (this may take some time)
console.log(2);
    if (x >= 9) {
        myResolve(`9 o más :) Entras en la lista de espera para la especialización!!!!`);
    } else {
        myReject(`Menos de 9 :( Te vas al curso de Fundamentos`);
    }
});

miPromesa.then(
  function(error) {missatge (error);},
  function(value) {missatge (value);}
);


//Nivell 1 - Exercici 2
//Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const callBack = (x) => typeof(x);
const myArrowFunction = (x,y) => console.log(y(x));
myArrowFunction(6,callBack);



