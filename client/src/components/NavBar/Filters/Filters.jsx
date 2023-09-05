import style from "./Filters.module.css"
import { useDispatch, useSelector } from "react-redux"
import { handlePage, resetFilters, filterByDiet, orderByName, orderByHs, filterByOrigin } from "../../../redux/actions"

const Filters = ( {allDiets} ) => {

    const dispatch = useDispatch()

    const {
        filterDiet, 
        filterOrigin, 
        orderAlph, 
        orderHS
    } = useSelector((state) => state)
    
    const handleDiets = (event) => {
        dispatch(filterByDiet(event.target.value))
        dispatch(handlePage(1))
    }

    const handleOrder = (event) => {
        dispatch(orderByName(event.target.value))
        dispatch(handlePage(1))
    }

    const handleHs = (event) => {
        dispatch(orderByHs(event.target.value))
        dispatch(handlePage(1))
    }

    const handleOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
        dispatch(handlePage(1))
    }

    const handleReset = () => {
        dispatch(resetFilters())
        dispatch(handlePage(1))
    }

    return(
        <div className={style.filters}>
            <div>
                <select onChange={handleOrder} value={orderAlph} className={style.classic}>
                    <option value="Default" selected disabled hidden>Default</option>
                    <option value="A">A-z</option>
                    <option value="D">Z-a</option>
                </select>
                <select onChange={handleHs} value={orderHS} className={style.classic}>
                    <option value="M" selected disabled hidden>Mixed HS</option>
                    <option value="A">HS +</option>
                    <option value="D">HS -</option>
                </select>
                <select onChange={handleDiets} value={filterDiet} className={style.classic}>
                    <option value="allDiets">All diets</option>
                    {allDiets?.map((diet) => {
                        return ( <option key={diet.id} value={diet.name}>{diet.name}</option> )
                    })}
                </select>
                <select onChange={handleOrigin} value={filterOrigin} className={style.classic}>
                    <option value="All">All origins</option>
                    <option value="api">Api</option>
                    <option value="db">DataBase</option>
                </select>
            </div>
                <button onClick={handleReset} className={style.btn}>RESET FILTERS</button>
        </div>
    )
}

export default Filters