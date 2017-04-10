"use strict"

// GLOBAL CONTEXT
<script type="text/javascript">
if (true) {
    // Line A
}
</script>


// CLASS CONTEXT
function myFun() {
    // Line B
}

obj.staticFunction = myFun;
obj.staticFunction();




// RELEASE 1
// this pada global konteks
// ketika dijalankan this akan diinisialisasi sebagai sebuah window
//
// pada class konteks
// ketika memanggil fungsi pada sebuah objek , this diset menjadi objek.
