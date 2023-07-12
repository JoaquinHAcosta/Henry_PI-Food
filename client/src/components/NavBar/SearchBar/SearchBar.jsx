import style from "./SearchBar.module.css"
import { useState, useEffect } from "react";

const SearchBar = () => {

    const [recipe, setRecipe] = useState("")

    const handleChange = (event) => {
        setRecipe(event.target.value)
    }

    return (
        <div>
            <input type="search" onChange={handleChange} name="search" value={recipe}/>
            <button className={style.btn}>Search</button>
        </div>
    );
}

export default SearchBar;