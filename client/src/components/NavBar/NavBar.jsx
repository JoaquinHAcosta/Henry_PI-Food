//import SearchBar from "../SearchBar/SearchBar"
import style from "./NavBar.module.css"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar/SearchBar"

const NavBar = ( ) => {

  

    return(
        <div className={style.nav}>
          <div>
            <Link to={"/home"}>
                <button className={style.btn}>Home</button>
            </Link>
          </div>
          <div>
            <SearchBar/>
          </div>
          <div>
            <Link to={"/about"}>
                <button className={style.btn}>Linkedin</button>
            </Link>
            <Link to={"/about"}>
                <button className={style.btn}>Github</button>
            </Link>
            <Link to={"/createrecipe"}>
                <button className={style.btn}>Add New Recipe</button>
            </Link>
          </div>
        </div>
    )
}

export default NavBar;