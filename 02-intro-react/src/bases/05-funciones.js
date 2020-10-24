// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = nombre => `Hola, ${nombre}`
const saludar4 = () => `Holamundo`

console.log("saludar", saludar);
console.log("saludar2", saludar2('goku'));
console.log("saludar3", saludar3('vegeta'));
console.log("saludar3", saludar3('vegeta'));

const getUser = () => (
    {
        uid: 'ABC123',
        username: 'pipiriche202'
    }
)
console.log("getUser ", getUser());

// Tarea



function getUsuarioActivo (nombre) {
    return ({
        uid: 'ABC567',
        name: nombre
    })
}

const usuarioActivo = getUsuarioActivo('Alejandro');
console.log("usuarioActivo ", usuarioActivo);

const getUsuarioActivo = name => ({uid:'ABC202', name:name});
console.log("getUsuarioActivo ", getUsuarioActivo);