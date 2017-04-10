"use strict"

class Sampel {
  constructor(a,b){
    this.key1 = a;
    this.key2 = b;
  }

  penjumlahan() {
    console.log(this.key1+this.key2);
  }
}

let sampel = new Sampel(1,2); //instanciate
sampel.penjumlahan(); // memanggil method yang jg memanggil this sebagai public property dari kelas tersebut
