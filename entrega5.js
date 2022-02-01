//Nivell 1 - Exercici 1
//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

const demores1segon = function () {
    setInterval(() => console.log("¿Hemos llegado ya?"), 1000)
}

//demores1segon();


//=======================================================================================================================================
//Nivell 1 - Exercici 2
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.
//Opció síncrona
const fs1 = require('fs');
const fEscriure = () => fs1.writeFileSync('test.txt','Awesome text')
//fEscriure ();


//Opció asíncrona
/* const fEscriure = () => {
    fs1.writeFile(fileName, content, err => {
        if (err) {
            console.error(err)
            return
        }
        console.log(`Archivo ${__dirname}\\${fileName} modificado exitosamente con el texto ${content} `)
    })
} */




//=======================================================================================================================================
//Nivell 1 - Exercici 3
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const fs2 = require('fs');
const fLlegir = () => console.log(fs2.readFileSync('./test.txt',{encoding:'utf8', flag:'r'}));
//fLlegir();

//mirar readFilesync para ahorrar líneas*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* const fLlegir = () => {
    fs2.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    })
} */

//=======================================================================================================================================
// Nivell 2 - Exercici 1
// Crea una funció que comprimeixi el fitxer del nivell 1.
// There are only 3 supported algorithms for compression (and decompression) of HTTP requests: deflate, gzip, brotli. 
// Gzip is the most widely used compression, especially for server and client interactions
// The zlib module provides compression functionality implemented using Gzip, Deflate/Inflate, and Brotli.

const fileName2 = 'test.txt'

const fComprimir = () => {
    const zlib = require('zlib');
    const gzip = zlib.createGzip();
    const fs3 = require('fs');
    const inp = fs3.createReadStream(fileName2);
    const out = fs3.createWriteStream('test.txt.gz');
    inp.pipe(gzip).pipe(out)
}

//fComprimir();

// Nivell 2 - Exercici 2
// Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.
// The child_process module provides the ability to spawn subprocesses (load and execute a new child process)

//OPCIÓ 1: Node Child Processes
const displayFiles = () => {
    const cp = require('child_process');
    //const exec_options = {}
    //cp.exec('dir',exec_options, (err, stdout, stderr) =>
    cp.exec('dir', (err, stdout, stderr) => { ////The dir command displays a list of files and subdirectories in a directory in Windows. In Linux is ls
        console.log(stdout)
    });
}
//displayFiles();

//OPCIÓ 2: NODE FILE SYSTEM
/*const filePath2 = `C:\\Users\\formacio\\Documents\\danimi\\sprint1`
var fs4 = require('fs');
 
fs4.readdir(filePath2, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
}); */

/* Nivell 3 - Exercici 1
Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1
Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials
Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial
Inclou un README amb instruccions per a l'execució de cada part */
const fs5 = require('fs');
const path = __dirname; 
const testText = fs5.readFileSync('./test.txt',{encoding:'utf8', flag:'r'});
let base64data = buff.toString('base64');
const testTextHex = testText.toString(16); //toString('hex')
const testText64 = testText.toString('base64');

/* const fs2 = require('fs')
const filePath = 'C:\\Users\\formacio\\Documents\\danimi\\sprint1\\test.txt';
//mirar readFilesync para ahorrar líneas*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fLlegir = () => {
    fs2.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    })
} */
