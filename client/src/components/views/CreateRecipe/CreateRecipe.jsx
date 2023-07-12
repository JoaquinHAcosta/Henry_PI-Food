import style from "./CreateRecipe.module.css"
import { useState } from "react"

const CreateRecipe = () => {

    const [ recipe, setRecipe ] = useState({
        name: "",
        summary: "",
        healthScore: "",
        steps: "",
        image: "",
        Diets: ""
    })

    const handleChange = (event) => {
        setRecipe({
            ...recipe,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
            <div className={style.card}>
            <div className={style.cardHeader}>
                <div className={style.textHeader}>New Recipe</div>
            </div>
            <div className={style.cardBody}>
                <form onSubmit={handleSubmit}>
                    <div className={style.formGroup}>
                        <label htmlFor="name">Nombre del plato: </label>
                        <input onChange={handleChange} type="text" name="name" value={recipe.name}/>
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="summary">Resumen del plato: </label>
                        <textarea onChange={handleChange} type="text" name="summary" value={recipe.summary}/>
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="healthScore">Health Score: </label>
                        <input onChange={handleChange} type="text" name="healthScore" value={recipe.healthScore}/>
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="steps">Paso a paso: </label>
                        <input onChange={handleChange} type="text" name="steps" value={recipe.steps}/>
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="image">Imagen</label>
                        <input onChange={handleChange} type="text" name="image" value={recipe.image}/>
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="Diets">Tipo de dieta</label>
                        <input onChange={handleChange} type="text" name="Diets" value={recipe.Diets}/>
                    </div>
                
                    <button className={style.btn} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateRecipe