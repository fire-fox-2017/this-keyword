"use strict"

// GLOBAL CONTEXT
//this.process.version
//this bisa dibuat menjadi petunjuk elemen / properti objek
var ini = this;
console.log(this);
console.log(ini);

this.test = 'test';
console.log(this.test);




// CLASS CONTEXT
//this ini mengacu pada objek yang terbuat dari class
//jika this di assign pada parent maka this mengacu ke parent tersebut
//dapat digunakan untuk memanggil object dan assign object
//tidak hanya objek saja, fungsi pun menggunakan this sebagai identifier bahwa fungsi tersebut memanggil ke dalam fungsi kelas tersebut 
class test {
  constructor(param) {
    this.param = param;
  }
}

var testThis = new test("parameter");
console.log(testThis.param);

// RELEASE 1
