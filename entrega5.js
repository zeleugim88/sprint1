//Nivell 1 - Exercici 1
//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

const demores1segon = function () {
    setInterval(() => console.log("¿Hemos llegado ya?"), 1000)
}

//demores1segon();


//=======================================================================================================================================
//Nivell 1 - Exercici 2
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs1 = require('fs');
const fileName = 'test.txt'
const content = '<<<<<<<<<<<<<<<<<<<Awesome Text>>>>>>>>>>>>>>>>>>>>>'
//mirar writeFilesync para ahorrar líneas*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fEscriure = () => {
    fs1.writeFile(fileName, content, err => {
        if (err) {
            console.error(err)
            return
        }
        console.log(`Archivo ${__dirname}\\${fileName} modificado exitosamente con el texto ${content} `)
    })
}

//fEscriure ();


//=======================================================================================================================================
//Nivell 1 - Exercici 3
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const fs2 = require('fs')
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
}

//fLlegir();


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
// The child_process module provides the ability to spawn subprocesses
// Spawn in computing refers to a function that loads and executes a new child process

//const filePath2 = process.argv[1]
const filePath2 = `C:\\Users\\formacio\\Documents\\danimi\\sprint1`

/* var fs4 = require('fs');
 
fs4.readdir(filePath2, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
}); */

//The dir command displays a list of files and subdirectories in a directory in Windows. In Linux is ls
const cp = require('child_process');

//const exec_options = {}
//cp.exec('dir',exec_options, (err, stdout, stderr) =>
cp.exec('dir', (err, stdout, stderr) => {
console.log(stdout)
});
