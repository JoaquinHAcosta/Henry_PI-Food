//import SearchBar from "../SearchBar/SearchBar"
import style from "./NavBar.module.css"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar/SearchBar"

const NavBar = ( ) => {

  

    return(
        <div className={style.nav}>
          <div>
            <Link to={"/recipes"}>
                <button className={style.btn}>Home</button>
            </Link>
          </div>
          <div>
            <SearchBar/>
          </div>
          <div>
            <Link to={"/about"}>
                <button className={style.btn}>L</button>
            </Link>
            <Link to={"/about"}>
                <button className={style.btn}>G</button>
            </Link>
            <Link to={"/recipes/createrecipe"}>
                <button className={style.btn}>Add New Recipe</button>
            </Link>
          </div>
        </div>
    )
}

export default NavBar;