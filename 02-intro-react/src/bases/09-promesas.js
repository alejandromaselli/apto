import {getHeroByID, getHeroesByOwner} from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroByID(1);
//         //console.log("heroe ", heroe);
//         //resolve(heroe)
//         reject('No se pudo encontrar el herie');
//     }, 2000);
// });

// console.log('despues de la promesa');

// promesa.then((heroe) => {
//     console.log('Heroe ', heroe);
// })
// .catch(err => console.warn(err))

const getHeroByIDAsync = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroByID(id);
            //console.log("heroe ", heroe);
            if (typeof heroe != 'undefined')
                resolve(heroe) 
            else 
                reject('No se puede encontrar')
            //resolve(heroe)
            //reject('No se pudo encontrar el herie');
        }, 2000);
    });
}

getHeroByIDAsync(1)
    .then(console.log)
    .catch(console.log)