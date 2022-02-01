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
const fEscriure = (file,text) => fs1.writeFileSync(file, text)
fEscriure ('test.txt','Awesome text'); 

//Opció asíncrona => fs1.writeFile

//=======================================================================================================================================
//Nivell 1 - Exercici 3
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const fs2 = require('fs');
const fLlegir = (file) => console.log(fs2.readFileSync(file,{encoding:'utf8', flag:'r'}));
//fLlegir('./test.txt');

//Opció asíncrona => fs1.readFile

//=======================================================================================================================================
// Nivell 2 - Exercici 1
// Crea una funció que comprimeixi el fitxer del nivell 1.

const fComprimir = (fileName) => {
    const zlib = require('zlib');
    const gzip = zlib.createGzip();
    const fs3 = require('fs');
    const inp = fs3.createReadStream(fileName);
    const out = fs3.createWriteStream('test.txt.gz');
    inp.pipe(gzip).pipe(out)
}

//fComprimir('test.txt');

//=======================================================================================================================================
// Nivell 2 - Exercici 2
// Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.

//OPCIÓ 1: Node Child Processes
const displayFiles = (folder) => {
    const cp = require('child_process');
    //const exec_options = {}
    //cp.exec('dir',exec_options, (err, stdout, stderr) =>
    cp.exec(folder, (err, stdout, stderr) => { //The dir command displays a list of files and subdirectories in a directory in Windows. In Linux is ls
        console.log(stdout)
    });
}
//displayFiles('dir');

//OPCIÓ 2: NODE FILE SYSTEM => fs4.readdir


//=======================================================================================================================================
//Nivell 3 - Exercici 1
//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1
const fs6 = require('fs');

const fCodificar = (file) => {

    const path = __dirname;
    const fileText = fs6.readFileSync(file, { encoding: 'utf8', flag: 'r' });
    const bufferText = Buffer.from(fileText, 'utf8'); //https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/
    const textHex = bufferText.toString('hex'); //toString('hex')
    const text64 = bufferText.toString('base64');
    fEscriure('testHex.txt', textHex);
    fEscriure('test64.txt', text64);
}

//fCodificar('./test.txt')

//Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials
const crypto = require('crypto');
const iv = crypto.randomBytes(16);
const algorithm = 'aes-192-cbc';
const password = '123456789'
var key = crypto.scryptSync(password, 'IT Academy', 24);
//const key = crypto.randomFillSync(new Uint8Array(24));

const codeCrypter  = (fileHex, file64) => {
    //read old files
    const textHex = fs6.readFileSync(fileHex, { encoding: 'utf8', flag: 'r' });
    const text64 = fs6.readFileSync(file64, { encoding: 'utf8', flag: 'r' });
    //encode
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    //encrypt 
    const encryptedHex = cipher.update(textHex, '16', 'utf-8');
    const encrypted64 = cipher.update(text64, '64', 'utf-8');
    //create new files
    fEscriure('testHexEncoded.txt', encryptedHex);
    fEscriure('test64Encoded.txt', encrypted64);
    //delete old files
    fs6.unlinkSync(fileHex)
    fs6.unlinkSync(file64)
}

//codeCrypter('./testHex.txt','./test64.txt');


//Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial

const decodeCrypter = (encryptedHex, encrypted64) => {
     //read old files
    const textHexEncrypted = fs6.readFileSync(encryptedHex, { encoding: 'utf8', flag: 'r' });
    const text64Encrypted = fs6.readFileSync(encrypted64, { encoding: 'utf8', flag: 'r' });
    //decode
    let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    //decrypt 
    let decryptedHex = decipher.update(textHexEncrypted, 'utf-8', '16');
    let decrypted64 = decipher.update(text64Encrypted, 'utf-8', '64');
    //create new files
    fEscriure('testHexDecoded.txt', decryptedHex);
    fEscriure('test64Decoded.txt', decrypted64);

}

//decodeCrypter('testHexEncoded.txt','test64Encoded.txt'); //ERROR invalid key length

//Inclou un README amb instruccions per a l'execució de cada part
