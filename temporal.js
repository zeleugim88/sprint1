//Nivell 1 - Exercici 1
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
    return new Promise ((resolve, reject) =>{
        resolve(employees.filter(employees => employees.id === id))
    })
}
//console.log(getEmployee(2));

const obj = {
    id: 3,
    name: 'Jeff Bezos'
};

//Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (obj) => {
    return new Promise ((resolve, reject) => {
        const foundObject = salaries.filter(salaries => salaries.id === obj.id);
        resolve(foundObject[0].salary);
    })
}
