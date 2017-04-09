"use strict"

// GLOBAL CONTEXT
"use strict"

// GLOBAL CONTEXT
const repl = require(`repl`);
console.log(repl);
console.log(process.versions.node);
/* atau bisa juga dari terminal
>node
>repl
>this.process.version*/


// CLASS CONTEXT
class Animal{
  constructor(name){
  this.name = name;
}
  getAnimal(){
    console.log(this.name)
  }
  testName(){
    this.getAnimal();
  }
}

let animal = new Animal('Cat')
animal.getAnimal()
animal.testName()
// RELEASE 1
/*
fungsi this tergantung pada bagaimana fungsi ini dipanggil.
This adalah sebuah keyword yang dipanggil untuk mereference object global
misalnya : jika didalam browser this menunjuk pada window atau pada NodeJS menunjuk pada global,
*/

/*Ketika this dipanggil didalam suatu kelas, this akan mereference class itu sendiri.
Contoh : jika kita memanggil method dalam satu kelas, kita dapat menggunakan this diikuti dengan
nama method : this.testName() atau untuk memanggil variabel pada construktor*/
