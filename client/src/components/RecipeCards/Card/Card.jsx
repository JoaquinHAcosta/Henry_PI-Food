import style from "./Card.module.css"
import { Link } from "react-router-dom"
import imageDefault from "../../mixutils/image_default.jpg"

const Card = ({id, name, image, dietsName}) => {

    const handlerError = (event) => {
        event.target.src = imageDefault
    }

    return(
        <div className={style.container}>
            <Link className={style.linkfeo} to={`/recipes/detail/${id}`}>
            <div className={style.main}>
                <img className={style.image} src={image} onError={handlerError} alt={name}/>
                <div className={style.info}>
                    <h1 className={style.tittle}>{name}</h1>
                    <div className={style.diets}>
                    {   dietsName.map((diet) => {
                            return( 
                                <div key={diet} className={style.diet}>{diet}</div>
                        )})
                    }
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Card