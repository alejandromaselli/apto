import  heroes, { owners }  from '../data/heroes';

//console.log(owners);

export const getHeroByID = id => heroes.find(number => number.id === id)
export const getHeroesByOwner = owner => heroes.filter((number, index) => number.owner === owner) 
//console.log(getHeroByID(5));
//console.log(getHeroesByOwner('DC'));

