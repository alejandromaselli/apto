/*=====================================
=            const and let            =
=====================================*/

const nombre = 'Alejandro';
const apellido = 'Maselli'

let valorDado = 5;
valorDado = 4;  

console.log(nombre, apellido, valorDado);

// var no se debe de usar
if (true) {
    let valorDado = 4;
    console.log("valorDado ", valorDado);
    
    const nombre = 'Peter';
    console.log("nombre ", nombre);
    
}

/*=====  End of const and let  ======*/