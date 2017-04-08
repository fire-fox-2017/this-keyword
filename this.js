"use strict"

// GLOBAL CONTEXT
const repl = require('repl');
console.log(repl);
//Fungsi
//Function : Inspect;
//Function : REPLServer;
//Function : Interface;
//Function : Recoverable;
//Function : SyntaxError;
console.log(process.versions.node);



// CLASS CONTEXT
class Rumah {
  constructor(luas_tanah, luas_bangunan, jumlah_kt) {
    this.luas_tanah = luas_tanah;
    this.luas_bangunan = luas_bangunan;
    this.jumlah_kt = jumlah_kt;
  }
  getSpek(){
    console.log(`Rumah ini memiliki luas tanah ${this.luas_tanah} dan luas bangunan ${this.luas_bangunan} serta jumlah kamar tidur ${this.jumlah_kt}`);
  }
}

let omah = new Rumah(150, 75, 3);
omah.getSpek();
// RELEASE 1
