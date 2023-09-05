import { useDispatch, useSelector } from "react-redux"
import style from "./CreateRecipe.module.css"
import { useEffect, useState } from "react"
import { getTypeDiets, postRecipes } from "../../../redux/actions"
import validations from "./validations"

const CreateRecipe = (  ) => {

    const dispatch = useDispatch()

    const [ errors, setErrors ] = useState({})
    const [ recipe, setRecipe ] = useState({
        name: "",
        summary: "",
        healthScore: 0,
        steps: [{number: 1, step: ""}],
        image: "",
        typeDiets: [],
        dietsName: []
    })
    
    const allDiets = useSelector((state) => state.allDiets)

    useEffect(() => {
        if (allDiets.length === 0) {
            dispatch(getTypeDiets())
        }
    }, [])
    
    const handleChange = (event) => {
        setRecipe({
            ...recipe,
            [event.target.name] : event.target.value
        })
        setErrors(
            validations({
            ...recipe,
            [event.target.name] : event.target.value
        }))
    }

    const handleDiets = (event) => {
        const dietId = event.target.value; //trae el valor de id desde el input
        const dietName = allDiets.find((diet) => diet.id === +dietId)?.name //busca el nombre asociado al id en el estado global

        if(!dietName) return //si el id no esta registrado en el estado global retorna

        // const isDietChecked = recipe.typeDiets.includes(dietId);  //si ya existe el id de la dieta en el estado local da true
        const isDietChecked = recipe.dietsName.includes(dietName);

        if (isDietChecked) { //si existe la dieta entra aca
          const updatedDietsId = recipe.typeDiets.filter((item) => item !== dietId); //borra el id del array de ids
          const updatedDietsName = recipe.dietsName.filter((item) => item !== dietName); //borra el name del array de names
          setRecipe({ ...recipe, typeDiets: updatedDietsId, dietsName: updatedDietsName }); //borra la dieta del id y del name
        } else { //si da false y no esta incluida la dieta, las agrega al estado local
          setRecipe({ ...recipe, typeDiets: [...recipe.typeDiets, dietId], dietsName: [...recipe.dietsName, dietName] });
        }
    };

    const handleSteps = (event, index, field) => {
        const newSteps = [...recipe.steps]
        newSteps[index][field] = event.target.value
        setRecipe({
            ...recipe,
            steps: newSteps
        })
    }

    const addStep = () => {
        const newStepNumber = recipe.steps.length + 1
        setRecipe({
            ...recipe,
            steps: [...recipe.steps, { number: newStepNumber, step: ""}]
        })
    }

    const removeStep = (index) => {
        const newSteps = [...recipe.steps]
        newSteps.splice(index, 1)
        setRecipe({
            ...recipe,
            steps: newSteps
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(postRecipes(recipe));
            setRecipe({
                name: "",
                summary: "",
                healthScore: "",
                steps: [""],
                image: "",
                typeDiets: [],
                dietsName: []
            })
    }

    return(
            <div className={style.card}>
            <div className={style.cardHeader}>
                <div className={style.textHeader}>New Recipe</div>
            </div>
            <div className={style.cardBody}>
                <form onSubmit={handleSubmit}>
                    <div className={style.formGroup}>
                        <label htmlFor="name">Name of the recipe: </label>
                        <input onChange={handleChange} type="text" name="name" value={recipe.name}/>
                        {errors.name && <p className={style.error}>{errors.name}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="summary">Summary of the recipe: </label>
                        <textarea onChange={handleChange} type="text" name="summary" value={recipe.summary}/>
                        {errors.summary && <p className={style.error}>{errors.summary}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="healthScore">Health Score: <b className={style.hsValue}>{recipe.healthScore}</b> </label>
                        <input className={style.range} onChange={handleChange} type="range" name="healthScore" value={recipe.healthScore}/>
                        {errors.healthScore && <p className={style.error}>{errors.healthScore}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="steps">Steps: </label>
                        {
                            recipe.steps.map((step, index) => (
                                <div key={index} className={style.stepContainer}>
                                    <input type="text" onChange={(event) => handleSteps(event, index, "step")} value={step.step} />
                                    {
                                        index > 0 && (
                                            <a className={style.btn2} onClick={() => removeStep(index)}>Delete</a>
                                        )
                                    }
                                </div>
                            ))
                        }
                        <button className={style.btn2} disabled={recipe.steps[recipe.steps.length-1].step !== "" ? false : true} onClick={addStep}>Add step</button>
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="image">Imagen</label>
                        <input onChange={handleChange} type="text" name="image" value={recipe.image} placeholder="image URL"/>
                        {errors.image && <p className={style.error}>{errors.image}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="Diets">Tipo de dieta</label>
                        <div className={style.formDiet}>
                        { allDiets?.map((diet) => {
                            return(
                            <div key={diet.id} className={style.dietsC}>
                                <label href="diets">{diet.name.toUpperCase()}</label>
                                <input onChange={handleDiets}  type="checkbox" name="typeDiets" value={diet.id}/>
                            </div>
                        )})}
                        </div>         
                    </div>
                
                    {errors.name || errors.summary || errors.healthScore || errors.image ? (
                        <p className={style.adv}>Complete all the inputs to create your recipe.</p>
                        ) : (
                        <button type="submit" className={style.btn}>Create Recipe</button>
                    )}
                </form>
            </div>
        </div>
    )
}

export default CreateRecipe