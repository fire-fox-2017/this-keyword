// "use strict"

// GLOBAL CONTEXT

// Method yang ada di dalam node repl diketahui dengan tulisan function, dengan mengakses this.
//
//
// Saya bisa mendapatkan versi node js pakai :

// this.process.version
// this.process.version.node

// CLASS CONTEXT

// class Siswa{
//   constructor(nama){
//     this.nama = nama;
//   }
//
//   print(){
//     console.log(`Namanya adalah : ${this.nama}`)
//   }
// }
//
// let siswa1 = new Siswa('ardi')
// siswa1.print();


// RELEASE 1

// this memiliki definisi yaitu
// 1. this merupakan kata untuk melakukan referensi terhadap variabel global
//
//     contoh :
//
//     var myVar = 100;
//
//     function WhoIsThis() {
//       var myVar = 200;
//
//       console.log(`myVar = ${myVar}`); //200
//       console.log(`this.myVar = ${this.myVar}`); //100
//
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
//   class Siswa{
//     constructor(nama){
//       this.nama = nama;
//     }
//
//     print(){
//       console.log(`Namanya adalah : ${this.nama}`)
//     }
//   }
//
//   let siswa1 = new Siswa('ardi')
//   siswa1.print();
//   siswa1.nama = 'x';
//   siswa1.print();
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
