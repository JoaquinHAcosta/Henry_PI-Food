import Card from "./Card/Card"
import style from "./RecipeCards.module.css"
import Paginate from "./Paginate/Paginate"
import Filters from "../NavBar/Filters/Filters"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllRecipes, getTypeDiets} from "../../redux/actions"

const RecipeCards = ( ) => {

    const dispatch = useDispatch()
    const {
        allRecipes,
        recipes,
        allDiets,
        numPage,
    } = useSelector(state => state)

    useEffect(() => {
        if (recipes.length === 0) {
            dispatch(getAllRecipes());
        }
        if (allDiets.length === 0) {
            dispatch(getTypeDiets());
        }
    }, []);

    const recipesPerPage = 9
    const totalPages = Math.ceil( recipes.length / recipesPerPage)
    const start = ( numPage - 1 ) * recipesPerPage
    const end = start + recipesPerPage
    let viewRecipes = []

    if (Array.isArray(allRecipes)) {
        viewRecipes = allRecipes.slice(start, end)
    }

    if (recipes.length > 0) viewRecipes = recipes.slice(start, end)

    return(
        <div>
                <Filters allDiets={allDiets}/>
                { recipes.length !==0 && <Paginate cantPages={totalPages} numPage={numPage}/>}
                { recipes.length === 0 
                ? 
                <div className={style.loadContainer}>
                    <span class={style.loader}></span>
                </div> 
                :
                <div className={style.container}> 
                    { viewRecipes.map(({id, name, image, dietsName, healthScore}) => {
                    return(
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        healthScore={healthScore}
                        dietsName={dietsName}
                        />
                    )
                }) }
                </div> }
            { recipes.length !==0 && <Paginate cantPages={totalPages} numPage={numPage}/>}
        </div>
    )
}

export default RecipeCards

