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
        if(id > 0 && id <= employees.length) {
            for (let x = 0; x < employees.length; x++) {
                if (employees[x].id === id) {
                    console.log(`El salario de ${employees[x].name} es de USD `);
                    resolve(employees[x])
                }
            }
        }
        reject(`Employee not found`);
    });

}

//console.log(getEmployee(4));

//Nivell 2 - Exercici 2
//Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.


const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        if (employee != undefined) {
            for (let x = 0; x < salaries.length; x++) {
                if (salaries[x].id === employee.id) {
                    //console.log(salaries[x]);
                    resolve(salaries[x].salary)
                }
            }
        }
        reject(`Salary not found`);
    });
}

//getSalary(employees[1]);

//Nivell 2 - Exercici 3
//Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.

getEmployee(1)
.then(result => getSalary(result))
.then(result => console.log(result))
.catch(error => console.log(error))



