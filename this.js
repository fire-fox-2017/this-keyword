"use strict"


// GLOBAL CONTEXT

// CLASS CONTEXT

// RELEASE 1
/*
* Secara umum, 'this' adalah global object
* Ketika sebuah fungsi dipanggil sebagai property pada parent object,
  maka 'this' mengacu pada parent object di dalam didalam fungsi tersebut
* Ketika sebuah fungsi dipanggil dengan operator 'new', maka 'this' mengacu
  pada object yang baru di-created
* Ketika sebuah fungsi dipanggil menggunakan 'call' atau 'apply', maka 'this'
  mengacu ke argumen yang diteruskan ke 'call' atau 'apply'. Jika argumen
  pertama adalah 'null' atau atau bukan sebuah objek, maka 'this' mengacu
  pada global object.
*/
