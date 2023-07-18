import style from "./Filters.module.css"
import { useDispatch } from "react-redux"
import { orderByName, orderByHs, filterByDiet, filterByOrigin } from "../../../redux/actions"
// import { useState } from "react"



const Filters = ( {allDiets }) => {

    const dispatch = useDispatch()

    // const allDietas = useState(state => state.allDiets)
    
    const handleOrder = (event) => {
        dispatch(orderByName(event.target.value))
        console.log(event.target.value);
    }
    
    const handleHs = (event) => {
        dispatch(orderByHs(event.target.value))
        console.log(event.target.value);
    }

    const handleDiets = (event) => {
        dispatch(filterByDiet(event.target.value))
        //aca el dispatch para enviar a pagina 1
        console.log(event.target.value);
    }

    const handleOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
        console.log(event.target.value);
    }

    return(
<div className={style.filters}>
    <select onChange={handleOrder} className={style.classic}>
        <option value="A">Ascendent</option>
        <option value="D">Descendent</option>
    </select>
    <select onChange={handleDiets} className={style.classic}>
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
    )
}

export default Filters