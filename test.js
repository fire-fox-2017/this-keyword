this
class Something{
  constructor(){
    this._attr1 = "asdjkasdh"
  }

  static a(){
    console.log('static', typeof this);
    return this
  }

  b(){
    console.log('b', typeof this);

    return this
  }

  c(){
    return function(){
      console.log('c', typeof this);
      return this
    }
  }

  d(){
    var hello = {}
    return function(){
      console.log('d',typeof this);
      return this
    }(hello)
  }
}

var some = new Something();
Something.a();
some.b();
some.c();
some.d();
