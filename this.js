"use strict"

// GLOBAL CONTEXT

/*
Contoh method yang ada di dalam node REPL :
- clearTimeout()
- setImmediate()

Syntax untuk mendapatkan versi dari NodeJS :
this.process.version
*/

// CLASS CONTEXT

/*
Contoh class yang menggunakan this :
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  greetings () {
    console.log(`Hi, all. My name is ${this.name}`);
  }
}

let person1 = new Person();
person1.greetings();
*/

// RELEASE 1

/*
Keyword 'this' memiliki arti yang berbeda tergantung konteks pemakaiannya.
Dalam konteks pemakaian this dalam node REPL this berarti object global si NodeJS yang berisi atribut macam-macam
misalnya property, versions, buffer, dll.
Dalam konteks html this berarti window
Dalam konteks class this itu menunjukkan ke class itu sendiri
*/
