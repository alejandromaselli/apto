/*=======================================
=            template string            =
=======================================*/

const nombre = 'Alejandro';
const apellido = 'Maselli';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} 
${apellido}
${1 + 1}
${getSaludo()}`

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola mundo ' + nombre;
}

console.log(`Este es un string ${getSaludo(nombre)}`);

/*=====  End of template string  ======*/