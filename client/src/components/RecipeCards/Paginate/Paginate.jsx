import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "../../../redux/actions"
import style from "./Paginate.module.css"

const Paginate = ( {cantPages, numPage }) => {

    const dispatch = useDispatch()

    const nextHandler = () => {
        dispatch(nextPage())
    }

    const prevHandler = () => {
        dispatch(prevPage())
    }

    return(
        <div className={style.container}>
            {
                numPage > 1 && (
                    <div>
                        <button className={style.btn} onClick={prevHandler}>PREV</button>
                    </div>
                )
            }
            <div className={style.btn}>{numPage}</div>
            {
                numPage < cantPages && (
                    <div>
                        <button className={style.btn} onClick={nextHandler}>NEXT</button>
                    </div>
                )
            }
        </div>
    )
}

export default Paginate


/* <div>
    <button className={style.btn} onClick={prevHandler}>Prev</button>
        <a className={style.btn}>{currentPage}</a>
    <button className={style.btn} onClick={nextHandler}>Next</button>
</div> */