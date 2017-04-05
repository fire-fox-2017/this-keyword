"use strict"

// GLOBAL CONTEXT
const repl = require('repl');
console.log(repl);
//Fungsi apa saja di dalamnya?
//Function : Inspect;
//Function : REPLServer;
//Function : Interface;
//Function : Recoverable;
//Function : SyntaxError;
console.log(process.versions.node);

class Motor {
  constructor(warna, model) {
    this.warna = warna;
    this.model = model;
  }

  getWarna() {
    console.log(this.warna);
  }
}
 let motor = new Motor ('red', 'x125');
 motor.getWarna();

// CLASS CONTEXT


// RELEASE 1
