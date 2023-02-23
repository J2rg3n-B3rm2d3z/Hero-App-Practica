import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/interfaces';

export const getHeroById = ( id:(string|undefined) ):(Hero|undefined) => {
    return heroes.find( hero => hero.id === id)
}