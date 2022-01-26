//Nivell 1 - Exercici 1
//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 

const fPromise = (x) => { //Parámetro x: nota en el examen de IT Academy
    let miPromesa = new Promise((resolve, reject) => {
    // The producing code (this may take some time)
        if (x >= 9) {
            resolve(`9 o más :) Entras en la lista de espera para la especialización!!!!`);
        } else {
            reject(`Menos de 9 :( Te vas al curso de Fundamentos`);
        }
    });
    return miPromesa
}
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

fPromise(9).then( //Parámetro x: nota en el examen de IT Academy
  function(error) {console.log(error);},
  function(value) {console.log(value);}
);
//==============================================================================================================================================

//Nivell 1 - Exercici 2
//Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const callBack = (x) => x%2 == 0? "par":"impar";
const myArrowFunction = (x,y) => console.log(y(x));
myArrowFunction(222,callBack);

//==============================================================================================================================================

//Nivel 2 - Exercici 1:
//Donats els objectes employees i salaries: 

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

//crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id.
const getEmployee = (id) => {
    return new Promise((resolve, reject) => {

        for (let x = 0; x < employees.length; x++) {
            if (employees[x].id === id) {
                resolve(employees[x])
            }
        }
        reject(`Employee not found`);
    });

}

//comprobar que devuelve Promise { 'Linux Torvalds' }
//console.log(getEmployee(1));

//__________________________________________________________________________
//Nivell 2 - Exercici 2
//Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.


const getSalary = (employee) => {
    const tempPromise = new Promise((resolve, reject) => {

        for (let x = 0; x < salaries.length; x++) {
            if (salaries[x].id === employee.id) {
                resolve(salaries[x].salary)
            }
        }
        reject(`Salary not found`);
    });
    tempPromise.then(
        function(value) {console.log(value);},
        function(error) {console.log(error);}
        );
}

//Para probar que funciona
//getSalary(employees[2]);

//Nivell 2 - Exercici 3
//Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

getEmployee
.then(value => {console.log(value); return getSalary}) //================================================> getEmployee tiene que retornar un objeto para que enlace con getSalary?
.then(value => console.log(value))
.catch(() => console.log('EMPLOYEE NOT FOUND'))


