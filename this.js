"use strict"

// GLOBAL CONTEXT

/*
title: 'node',
     version: 'v7.7.4'


*/

var publicThis = this;
console.log(this);

this.a = 33;
console.log(this.a);

// CLASS CONTEXT
class This {
  constructor(name) {
    this.name = name;
  }
}

var testThis = new This("haha");
console.log(testThis.name);

// RELEASE 1
/*
http://unschooled.org/2012/03/understanding-javascript-this/

this
bisa berfungsi sebagai:
1. global object
2. parent object jika dipanggil di dalam object
3. new operator di constructor
4. bisa dipakai dalam call and apply methods

*/
