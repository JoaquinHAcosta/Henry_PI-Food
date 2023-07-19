import style from "./Detail.module.css"
import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import data from "../../../data"
import { getRecipeById, cleanDetail } from "../../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Detail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    
    const recipe = useSelector((state) => state.recipeDetail)

    useEffect(() => {
        dispatch(getRecipeById(id))

        return () => {
            dispatch(cleanDetail());
        };
    }, [dispatch, id])

    
    return(
        <div className={style.bigContainer}>
            { Object.keys(recipe).length === 0 
            ? <div className={style.loadContainer}>
                    <span class={style.loader}></span>
              </div> 
            :<div className={style.container}>
                <Link to={"/recipes"}>
                    <button className={style.closeBtn}>X</button>
                </Link>
            <div className={style.main}>
                <div className={style.block}>
                    <img className={style.image} src={recipe?.image} alt={recipe?.name} />
                </div>
                <div className={style.block}>
                    <div className={style.info}>
                        <div className={style.title}>
                            <h2>{recipe?.name}</h2>
                        </div>
                        <div className={style.hScore}>
                            <ins>HealthScore:</ins>
                            <p>{recipe?.healthScore}</p>
                        </div>
                        <p>{recipe?.summary}</p>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.info}>
                            <h2 className={style.subTitle}>Paso a paso</h2>
                            <ol>
                                {recipe?.steps?.map((step) => {
                                    return(
                                        <li key={step.number}>{step.step}</li>
                                    )
                                })}
                            </ol>
                    </div>
                </div>
                <div className={style.block}>
                        <h2 className={style.subTitle}>Tipos de dieta</h2>
                    <div className={style.dietsTags}>
                            {recipe?.dietsName?.map((diet) => {
                                    return( 
                                        <div key={diet} className={style.diet}>{diet}</div>
                                )})
                            }
                    </div>
                </div>                
                
            </div>
            </div>}
        </div>
    )
}

export default Detail