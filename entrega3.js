//Nivell 1 - Exercici 1
//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

let x = 9; //nota en el examen de IT Academy

let miPromesa = new Promise((resolve, reject) => {
// The producing code (this may take some time)
    if (x >= 9) {
        resolve(`9 o más :) Entras en la lista de espera para la especialización!!!!`);
    } else {
        reject(`Menos de 9 :( Te vas al curso de Fundamentos`);
    }
});

miPromesa.then(
  function(error) {console.log(error);},
  function(value) {console.log(value);}
);


//Nivell 1 - Exercici 2
//Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const callBack = (x) => typeof(x);
const myArrowFunction = (x,y) => console.log(y(x));
myArrowFunction(6,callBack);


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
const id = 3;

const getEmployee = new Promise((resolve, reject) => {

    for (let x = 0; x < employees.length; x++) {
        if (employees[x].id === id) {
            resolve(employees[x].name)
        }
    }
    reject(`Employee not found`);
});

getEmployee.then(
  function(error) {console.log(error);},
  function(value) {console.log(value);}
);

//__________________________________________________________________________
//Nivell 2 - Exercici 2
//Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

const empleado = {
    id: 2,
    name: 'Jeff Bezos'
};

const getSalary = new Promise((resolve, reject) => {

    for (let x = 0; x < salaries.length; x++) {
        if (salaries[x].id === empleado.id) {
            resolve(salaries[x].salary)
        }
    }
    reject(`Salary not found`);
});

getSalary.then(
  function(error) {console.log(error);},
  function(value) {console.log(value);}
);

//Nivell 2 - Exercici 3
//Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

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

//INPUTS:
const id = 3;

const empleado = {
    id: 3,
    name: 'Jeff Bezos'
};

//arrow function getEmployee => retorni una Promise efectuant la cerca en l'objecte pel seu id
const getEmployee = new Promise((resolve, reject) => {

    for (let x = 0; x < employees.length; x++) {
        if (employees[x].id === id) {
            resolve(employees[x].name) //resolve no puede devolver un objeto? resolve({employees[x].id, employees[x].name})
        }
    }
    reject(`Employee not found`);
});

//arrow function getSalary => rebi com a paràmetre un objecte employee i retorni el seu salari.
const getSalary = new Promise((resolve, reject) => {

    for (let x = 0; x < salaries.length; x++) {
        if (salaries[x].id === empleado.id) {
            resolve(salaries[x].salary) 
        }
    }
    reject(`Salary not found`);
});


getEmployee
.then(value => {console.log(value); return getSalary}) //================================================> getEmployee tiene que retornar un objeto para que enlace con getSalary?
.then(value => console.log(value))
.catch(() => console.log('EMPLOYEE NOT FOUND'))


