import style from "./Landing.module.css"
import { Link } from "react-router-dom"
import kitchen from "../../mixutils/landingkitchen.jpg"

const Landing = () => {
    return(
        <div className={style.container}>
            <div className={style.midContainer}>
                <div className={style.box}>
                    <h1 className={style.tittle}>FOODIE APP</h1>
                    <h2 className={style.subtittle}>PI SPOONACULAR 2023</h2>
                    <p className={style.parraph}>This PI is focused on the development of an API of healthy recipes to maintain a healthy eating level</p>
                    <Link to={"/recipes"}>
                        <button className={style.btn}>GET IN</button>
                    </Link>
                </div>
            </div>
            <div className={style.midContainerImg}>
                <img className={style.imagen} src={kitchen} alt="kitchen" />
            </div>
        </div>
    )
}

export default Landing