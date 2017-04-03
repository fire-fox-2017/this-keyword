"use strict"

// GLOBAL CONTEXT
// (di terminal, untuk mendapatkan versi node menggunakan this)
// > node
// > this.process.version

// CLASS CONTEXT
// (contoh class menggunakan this)
// class Aku {
//   constructor (status){
//     this.status = status
//   }
// }
// var Bill = new Aku(single);
// console.log(Bill.status);

// RELEASE 1
// 'This' in global context refers to window.
// 'This' in function context depends on how the function is called.
// If function is not in strict mode and 'this' is not set, 'this' refers to the global object default.
// In strict mode, 'this' refers to whatever value that was set initially.
// In object method, 'this' is set to the object the method is called on.
// When a function is used as a constructor (with the new keyword), its 'this' is bound to the new object being constructed.
