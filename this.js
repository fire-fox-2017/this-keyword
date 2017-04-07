"use strict"
const repl = require('repl');
const version = '';
// this.process.process.version
repl.start('> ').context.v_node = version;

// GLOBAL CONTEXT
/* 
this menunjuk ke variabel global  dari tempat this ini di panggil,
contoh : jika didalam browser this menunjuk pada window atau pada NodeJS menunjuk pada global,

Misalnya untuk mengakses this NodeJS itu sendiri di Node Repl
contoh : memanggil versi NodeJS : node --> this.process.version
dari situ kita bisa mengambil bahwa this digunakan untuk memanggil semua method didalam node,
dan dengan menggunakan this.[object/method]
kita bisa memanggil objek didalammnya


// CLASS CONTEXT
Ketika this dipanggil didalam suatu kelas, this akan mereference class itu sendiri.
Contoh : ketika kita akan memanggil method dalam satu kelas, kita dapat gunakan this diikuti nama method : this.parseData()
atau untuk memanggil variabel pada construktor

// RELEASE 1
This adalah sebuah keyword yang dipanggil untuk mereference object global
*/