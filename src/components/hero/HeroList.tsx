import { useMemo } from 'react';
import { Hero } from '../../interfaces/interfaces';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';


type HeroListProps = {
    publisher: string;
}


export const HeroList = ({ publisher }: HeroListProps) => {

    const heroes:Hero[] = useMemo(() => {
        return getHeroByPublisher(publisher)
    },[publisher]);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}
                        {...hero} />
                ))
            }
        </div>
    )
}