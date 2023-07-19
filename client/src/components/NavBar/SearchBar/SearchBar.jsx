import style from "./SearchBar.module.css"
import { useState } from "react";
import { getRecipeByName, handlePage } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const SearchBar = () => {

    const dispatch = useDispatch()
    const [recipeName, setRecipeName] = useState("")

    const handleChange = (event) => {
        setRecipeName(event.target.value)
    }

    const handleSearch = () => {
        dispatch(getRecipeByName(recipeName))
        dispatch(handlePage(1))
        setRecipeName("")
    }

    return (
        <div>
            <input type="search" onChange={handleChange} name="search" value={recipeName}/>
            <button onClick={handleSearch} className={style.btn}>Search</button>
        </div>
    );
}

export default SearchBar;