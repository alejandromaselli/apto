/*=========================================
=            Objetos literales            =
=========================================*/

const persona = {
    nombre: 'Tony',
    apelido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 1001,
        lat: 14.2155,
        lng: 34.2315,
    }
};

//esto no se hace porque al cambiar a persona 2 también cambiamos al objeto original de persona.
//const persona2 = persona;
//persona2.nombre = 'Peter';

// En vez se hace la operación de spread
const persona2 = {...persona}

console.table(persona);
console.table(persona2);

//console.log( { tersona:persona } );

/*=====  End of Objetos literales  ======*/