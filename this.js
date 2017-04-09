"use strict"

// GLOBAL CONTEXT
/*
'this' pada konteks global akan me-refer pada 'global' object dari nodejs.
oleh karena itu function dari this pada konteks ini sama dengan function
yg dimiliki oleh global. Global sendiri memiliki banyak subobject di dalamnya.
Fungsi dari subobject-subobject dapat diakses dari global, contohnya sbb:

require()
sub object console memiliki console.log() dll
sub object process memiliki process.exit() dll
sub object buffer memiliki buffer.aloc() dll
dsb

untuk memanggil versi dari nodejs pada REPL ada 2 cara sbb:
this.process.version
atau
this.process.versions.node

*/
// CLASS CONTEXT
/*
contoh 'this' pada class,
 
class MyClass {
  constructor(value1, value2) {
    this.var1 = value1;
    this.var2 = value2;
  }
  
  method1() {
    return this.var1 + this.var2;
  }
  
  method2() {
    return this.var1 - this.var2;
  }
}

pada konteks class, 'this' akan mengacu kepada kelas itu sendiri.
oleh karena itu 'this' dapat digunakan untuk memakai properties dari kelas
tersebut di dalam method-method di dalam kelas itu sendiri.

*/

// RELEASE 1
/*
'this' memiliki berbagai 'arti' tergantung dari di mana 'this' digunakan.
'this' bisa menjadi dalam konteks global, maupun menjadi konteks lokal seperti misalnya
di dalam class. Oleh karena itu pemahaman akan 'this' sangat penting
di dalam implementasinya pada code sehingga tidak terjadi kesalahan.
*/
