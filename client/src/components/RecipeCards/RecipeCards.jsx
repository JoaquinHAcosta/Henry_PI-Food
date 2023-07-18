import Card from "./Card/Card"
import style from "./RecipeCards.module.css"
// import Filters from "../NavBar/Filters/Filters"
import Paginate from "./Paginate/Paginate"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getAllRecipes, getTypeDiets, handlePage, filterByDiet, orderByName, orderByHs, filterByOrigin } from "../../redux/actions"

const RecipeCards = ( ) => {

    const dispatch = useDispatch()
    const {
        allRecipes,
        recipes,
        allDiets,
        numPage
    } = useSelector(state => state)

    // const [ order, setOrder ] = useState("")
    const [ dietFilter, setDietFilter ] = useState("All")

    useEffect(() => {
        dispatch(getAllRecipes());
        dispatch(getTypeDiets());
    }, [dispatch]);

    const recipesPerPage = 3
    const totalPages = Math.ceil( recipes.length / recipesPerPage)
    const start = ( numPage - 1 ) * recipesPerPage
    const end = start + recipesPerPage
    let viewRecipes = []

    if (Array.isArray(allRecipes)) {
        viewRecipes = allRecipes.slice(start, end)
    }

    if (recipes.length > 0) viewRecipes = recipes.slice(start, end)


    const handleDiets = (event) => {
        setDietFilter(event.target.value)
        dispatch(filterByDiet(event.target.value))
        dispatch(handlePage(1))
        console.log(event.target.value);
    }

    const handleOrder = (event) => {
        // setOrder(event.target.value)
        dispatch(orderByName(event.target.value))
        dispatch(handlePage(1))
        console.log(event.target.value);
    }

    const handleHs = (event) => {
        // setOrder(event.target.value)
        dispatch(orderByHs(event.target.value))
        dispatch(handlePage(1))
        console.log(event.target.value);
    }

    const handleOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
        dispatch(handlePage(1))
        console.log(event.target.value);
    }

    return(
        <div>
            {/* <Filters allDiets={allDiets}/> */}
            <div className={style.filters}>
                <select onChange={handleOrder} className={style.classic}>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>
                <select onChange={handleDiets} value={dietFilter} className={style.classic}>
                    <option value="allDiets">All diets</option>
                    {allDiets?.map((diet) => {
                        return ( <option key={diet.id} value={diet.name}>{diet.name}</option> )
                    })}
                </select>
                <select onChange={handleHs} className={style.classic}>
                    <option value="M">Mixed Health Score</option>
                    <option value="A">HS +</option>
                    <option value="D">HS -</option>
                </select>
                <select onChange={handleOrigin} className={style.classic}>
                    <option value="All">All origins</option>
                    <option value="api">Api</option>
                    <option value="db">DataBase</option>
                </select>
            </div>
            <div className={style.container}>
                { viewRecipes.map(({id, name, imagen, dietsName, healthScore}) => {
                    return(
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        imagen={imagen}
                        healthScore={healthScore}
                        dietsName={dietsName}
                        />
                    )
                })}
            </div>
            <Paginate cantPages={totalPages} numPage={numPage}/>
        </div>
    )
}

export default RecipeCards