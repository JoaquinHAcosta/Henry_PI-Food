import style from "./NavBar.module.css"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar/SearchBar"
import logoFood from '../../assets/logo-foodie-223.png'
import linkedinLogo from '../../assets/linkedin.png'
import githubLogo from '../../assets/github.png'

const NavBar = ( ) => {

  return(
        <div className={style.nav}>
          <div>
            <Link to={"/recipes"}>
                <img className={style.logoMain} src={logoFood} alt="Logo foodie" />
            </Link>
          </div>
          <div className={style.searchBar}>
            <SearchBar/>
          </div>
          <Link to={"/recipes/createrecipe"}>
                <button className={style.btn}>Add New Recipe</button>
          </Link>
          <div>
            <Link to={"https://www.linkedin.com/in/stratozoma/"}>
              <img className={style.socialsIcon} src={linkedinLogo} alt="Linkedin logo" />
            </Link>
            <Link to={"https://github.com/JoaquinHAcosta"}>
              <img className={style.socialsIcon} src={githubLogo} alt="Github logo" />
            </Link>
          </div>
            
        </div>
    )
}

export default NavBar;