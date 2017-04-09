"use strict"

// GLOBAL CONTEXT
const repl = require(`repl`);

console.log(repl);

console.log(process.versions.node);



// CLASS CONTEXT
class Bunga{
  constructor(jenis, warna){
  this.jenis = jenis;
  this.warna = warna;
}

getBunga(){
  console.log(`Tamanku penuh ${this.jenis} berwarna ${this.warna}`)
}
}

let bunga = new Bunga('Mawar', 'Merah')
bunga.getBunga()
// RELEASE 1
