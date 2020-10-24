// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Airon man',
    rango: 'Soldado',
}

const { nombre:nombre2, edad, clave} = persona;

console.log("persona.nombre ->", persona.nombre);
console.log("persona.edad ->", persona.edad);
console.log("persona.clave ->", persona.clave);

console.log("nombre2 ->", nombre2);
console.log("edad ->", edad);
console.log("clave ->", clave);

const useContext = ({clave, nombre, edad, rango = 'capitan' }) => {
    // console.log(nombre);
    // console.log(edad);
    // console.log(rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log("nombreClave, anios -> ", nombreClave, anios);
//console.log("latlng", latlng);
console.log('lat y lng', lat,",", lng);
