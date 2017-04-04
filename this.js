"use strict"

// GLOBAL CONTEXT
//Sintax untuk mendapatkan method-method dialam Node REPL
// const repl = require('repl');
// console.log(repl);
//method-method yang ada dialamnya :
//-Function Inspect(Colors,Styles)
//-Function REPLServer
//-Function Interface
//-Function Recoverable
//-Function SyntaxError

//Sintax untuk mendapatkan version NodeJS
// console.log(process.versions.node);


// CLASS CONTEXT
class bird {
  constructor(name){
    this.name=name;
  }
  getName(){
    return this.name
  }
}
let Mybird =new bird('Jarwo');
console.log(Mybird.getName());

// RELEASE 1
//this merupakan menujukan suatu variabel yang memiliki scope tertentu,
//this membantu untuk mendefinisikan suatu variabel sesuai dengan scopenya.
//this bersifat GLOBAL
//dengan this akan mendapatkan isi secara keseluruhan
