"use strict"

// GLOBAL CONTEXT
var stedy = this;
console.log(this);

this.abc = "keren"
console.log(this.abc)
// CLASS CONTEXT
class tes {
  constructor(testis){
    this._testis = testis
  }
}
let test = new tes("tistes")
console.log(test.name)

// RELEASE 1

/* jadi this tu kaya keyword yang serbaguna buat nunjuk sesuatu di javascript basicly
  kaya misal this bisa "Owner" dari sebuah function atau object dalam artian this dapat mewakili mereka semua
  dan bisa menjadi object menjadi Object juga */
