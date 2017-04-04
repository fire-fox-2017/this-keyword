"use strict"

// GLOBAL CONTEXT
const repl = require('repl');
const replServer = repl.start({pompt: '> '});

replServer.defineCommand('version', {
  help: 'Show current function of Node',
  action() { // type .version in terminal
    console.log(`Your node version is: ${this.context.process.version}`);
  }
});



// CLASS CONTEXT
class Motorbike {
  constructor(brand, type, color) {
    this.brand = brand;
    this.type = type;
    this.color = color;
  }
}

let myMotorbike = new Motorbike('Kawasaki', 'Ninja', 'Green');
console.log(myMotorbike.type);

// RELEASE 1

/*
Menurut saya, this dalam javascript bisa digunakan
untuk mengakses global variabel. Hal lain, this bisa
digunakan untuk mengakses property dari sebuah object.
Hal paling umum dalam penggunaan this di OOP, menurut
saya adalah pendeklarasian this sebagai public property
dalam pembuatan sebuah class.
*/