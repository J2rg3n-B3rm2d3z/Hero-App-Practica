import { heroes } from "../data/heroes"
import { Hero } from '../interfaces/interfaces';



export const getHeroByPublisher = (publisher:string):Hero[] => {

    const validPublishers = ['DC Comics', 'Marvel Comics']
    if (!validPublishers.includes(publisher)){
        throw new Error( `${publisher} no es un publisher valido`)
    }

    return heroes.filter( hero => hero.publisher === publisher);
    
}