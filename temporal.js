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
//OPCIÓ 1
/* const getEmployee = (x) => console.log(x);
const id = 3;

const miPromesa = new Promise((resolve, reject) => {

    for (let x = 0; x < employees.length; x++) {
        if (employees[x].id === id) {
            resolve(employees[x].name)
        }
    }
    reject(`Employee not found`);
});

miPromesa.then(
  function(error) {getEmployee (error);},
  function(value) {getEmployee (value);}
); */


///// OPCIÓ 2:
/* const id = 3;

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
); */
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
