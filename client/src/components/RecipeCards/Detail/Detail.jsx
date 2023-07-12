import style from "./Detail.module.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import data from "../../../data"

const Detail = () => {

    const { id } = useParams()
    //const [ recipe, setRecipe ] = useState({})
    const recipe = data.find((recipe) => recipe.id == id)


    return(
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.block}>
                    <img className={style.image} src={recipe.imagen} alt={recipe.name} />
                </div>
                <div className={style.block}>
                    <div className={style.info}>
                        <div className={style.title}>
                            <h2>{recipe.name}</h2>
                        </div>
                        <div className={style.hScore}>
                            <ins>HealthScore:</ins>
                            <p>{recipe.healthScore}</p>
                        </div>
                        <p>{recipe.summary.replace(/(&nbsp;|<([^>]+)>)/ig, "")}</p>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.info}>
                            <h2 className={style.subTitle}>Paso a paso</h2>
                            <ol>
                                {recipe.steps?.map((step) => {
                                    return(
                                        <li>{step.step}</li>
                                    )
                                })}
                            </ol>
                    </div>
                </div>
                <div className={style.block}>
                        <h2 className={style.subTitle}>Tipos de dieta</h2>
                    <div className={style.dietsTags}>
                            {recipe.diets?.map((diet) => {
                                    return( 
                                        <div className={style.diet}>{diet}</div>
                                )})
                            }
                    </div>
                </div>                
                
            </div>
        </div>
    )
}

export default Detail