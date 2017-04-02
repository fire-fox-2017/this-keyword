"use strict"

// GLOBAL CONTEXT
class Keywords {
  constructor(word) {
    this._words = word
  }

  lower(){
    this._words = this._words.toLowerCase()
    return this._words
  }
}



// CLASS CONTEXT

let get = new Keywords('heEllEn')
console.log(get.lower());

// RELEASE 1
/*
jika hanya mengembalikan return this outputnya berupa object dari name class
name class {
property : value
}
atau
keywords{
_words : hasilnya
}

jika pake this._words (propertynya)
maka nilai nya yang akan keluar
*/
