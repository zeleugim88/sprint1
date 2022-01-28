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
//getEmployee(1).then(x => console.log(x));

//console.log(getEmployee(2));
/* const obj = {
    id: 3,
    name: 'Jeff Bezos'
}; */

//Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari
const getSalary = (obj) => {
    return new Promise ((resolve, reject) => {
        const foundObject = salaries.filter(salaries => salaries.id === obj.id);
        resolve(foundObject[0].salary);
    })
}

//console.log(getSalary(obj))

//- Exercici 2
//Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, usant les funcions que has definit a l'exercici anterior.
const finalFunction = async (id) => {
    const promise1 = await getEmployee(id);
    console.log("PROMESA1:"+promise1) // DEVUELVE EL RESULTADO COMO STRING EN VEZ DE COMO OBJETO
/*     const promise2 = await getSalary(promise1)
    console.log(promise2) */
}

finalFunction(1);


//Nivell 2 - Exercici 1
//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
const fPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Vamoss");}, 2000)
    }) 
}

const fAsincrona = async () => {
    try {
        const result = await fPromise();
        console.log(result)
      }
      catch(err) {
        "Ohh shit"
      } 
}

//fAsincrona();

/* Nivell 3 - Exercici 1
Captura tots els errors possibles dels nivells 1 i 2. */