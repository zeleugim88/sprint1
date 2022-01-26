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
        if(id < employees.length) {
            for (let x = 0; x < employees.length; x++) {
                if (employees[x].id === id) {
                    resolve(employees[x])
                }
            }
        }
        reject(`Employee not found`);
    });

}

//comprobar que devuelve Promise { 'Linux Torvalds' }
//console.log(getEmployee(4));

//__________________________________________________________________________
//Nivell 2 - Exercici 2
//Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.


const getSalary = (employee) => {
    const tempPromise = new Promise((resolve, reject) => {
        if (employee != undefined) {
            for (let x = 0; x < salaries.length; x++) {
                if (salaries[x].id === employee.id) {
                    resolve(salaries[x].salary)
                }
            }
        }
        reject(`Salary not found`);
    });
    tempPromise.then(
        function(value) {value;},//con console.log retorna el salario y sólo con value y console.log después retorna undefined
        function(error) {error;}
        );
}


//Para probar que funciona
//getSalary(employees[2]);

//Nivell 2 - Exercici 3
//Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises


console.log(getSalary(employees[1])); 
/* getEmployee(2)
.then(getSalary()) //================================================> getEmployee tiene que retornar un objeto para que enlace con getSalary?
.catch(() => console.log('EMPLOYEE NOT FOUND')) */


/* doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);

 */
