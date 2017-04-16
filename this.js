// "use strict"
//
// GLOBAL CONTEXT
//
// Method yang ada di dalam node repl diketahui dengan tulisan function, dengan mengakses this.
//
//
// Saya bisa mendapatkan versi node js pakai :
//
// this.process.version
// this.process.version.node
//
// CLASS CONTEXT
//
// class Mobil{
//   constructor(nama){
//     this.nama = nama;
//   }
//
//   print(){
//     console.log(`Namanya adalah : ${this.nama}`)
//   }
// }
//
// let mobil = new Mobil('luxio')
// mobil.print();
//
//
// RELEASE 1
//
// this memiliki definisi yaitu
//
// 1. this merupakan kata untuk melakukan referensi terhadap variabel global
//
//     contoh :
//
//     var newVar = 100;
//
//     function WhoIsThis() {
//       var newVar = 200;
//       console.log(`newVar = ${newVar}`); //200
//       console.log(`this.newVar = ${this.newVar}`); //100
//     }
//
//     WhoIsThis();
//
//     // jika menggunakan this.myVar, maka this akan mengakses var myVar yang ada di global scope.
//     // sehingga hasil dari this.myVar = 100, bukan 200.
//
// 2. this dalam  oop digunakan untuk mendeklarasikan public properties
//
//   Contoh
//
//
//   class Mobil{
//     constructor(nama){
//       this.nama = nama;
//     }
//
//     print(){
//       console.log(`Namanya adalah : ${this.nama}`)
//     }
//   }
//
//   let mobil = new Mobil('luxio')
//   mobil.print();
//   mobil.nama = 'x';
//   mobil.print();
//
// 3. this dalam object digunakan untuk memanggil propertinya
//
//   Contoh
//
//   var object = {
//   prop: 37,
//   f: function() {
//     return this.prop;
//     }
//   };
//
// console.log(object.f()); // 37
