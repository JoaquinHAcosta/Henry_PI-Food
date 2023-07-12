import style from "./Landing.module.css"
import { Link } from "react-router-dom"

const Landing = () => {
    return(
        <div>
            <h1>Hola</h1>
            <Link to={"/home"}>
                <button>A Home</button>
            </Link>
        </div>
    )
}

export default Landing