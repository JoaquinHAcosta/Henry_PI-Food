import style from "./Card.module.css"
import { Link } from "react-router-dom"

const Card = ({id, name, imagen, diets}) => {
    return(
        <div className={style.container}>
            <Link className={style.linkfeo} to={`/detail/${id}`}>
            <div className={style.main}>
                <img className={style.image} src={imagen} alt={name}/>
                <div className={style.info}>
                    <h1 className={style.tittle}>{name}</h1>
                    <div className={style.diets}>
                    {   diets.map((diet) => {
                            return( 
                                <div className={style.diet}>{diet}</div>
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