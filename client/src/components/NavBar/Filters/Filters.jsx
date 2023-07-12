import style from "./Filters.module.css"

const Filters = () => {
    return(
<div className={style.filters}>
    <select className={style.classic}>
        <option value="A">Ascendent</option>
        <option value="D">Descendent</option>
    </select>
    <select className={style.classic}>
        <option value="allDiets">All diets</option>
        <option value="firstDiet">firstDiet</option>
        <option value="secondDiet">secondDiet</option>
        <option value="thirdDiet">thirdDiet</option>
        <option value="fourDiet">fourDiet</option>
    </select>
    <select className={style.classic}>
        <option value="all">Mixed Health Score</option>
        <option value="A">HS +</option>
        <option value="D">HS -</option>
    </select>
    <select className={style.classic}>
        <option value="all">All origins</option>
        <option value="api">Api</option>
        <option value="db">DataBase</option>
    </select>
</div>
    )
}

export default Filters