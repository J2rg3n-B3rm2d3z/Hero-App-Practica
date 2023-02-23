import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";



export const HeroScreen = (): JSX.Element => {

    const { heroeId } = useParams();
    const hero = useMemo(() => {
        return getHeroById(heroeId)
    }, [heroeId]);

    const navigate = useNavigate();

    if (!hero) {
        return (
            <Navigate to='/' />
        )
    }
    else {

        const { id,
            alter_ego,
            characters,
            publisher,
            first_appearance,
            superhero } = hero

        const imagePath: string = `/assets/${id}.jpg`;


        const handleReturn = () => {
            if(publisher==='DC Comics'){
                navigate('/dc');
            }
            else if(publisher==='Marvel Comics'){
                navigate('/marvel');
            }else{
                navigate(-1); //El menos 1 te regresa a la pagina anterior a la que estabas
            }

        }

        return (
            <div className="row mt-5">
                <div className="col-4">
                    <img src={imagePath}
                        alt={superhero}
                        className="img-thumbnail" />
                </div>
                <div className="col-8">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Alter ego:</b> {alter_ego}
                        </li>
                        <li className="list-group-item">
                            <b>Publisher:</b> {publisher}
                        </li>
                        <li className="list-group-item">
                            <b>First Appereance:</b> {first_appearance}
                        </li>
                    </ul>
                    <h5 className="mt-3">Characters</h5>
                    <p>{characters}</p>
                    <button
                        className="btn btn-outline-info"
                        onClick={() => handleReturn()}>
                        Regresar
                    </button>
                </div>
            </div>
        )
    }

}