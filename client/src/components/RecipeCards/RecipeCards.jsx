import Card from "./Card/Card"
import style from "./RecipeCards.module.css"

const RecipeCards = ( { data } ) => {
    
    return(
        <div className={style.container}>
            { data.map(({id, name, imagen, diets, healthScore}) => {
                return(
                    <Card
                    key={id}
                    id={id}
                    name={name}
                    imagen={imagen}
                    healthScore={healthScore}
                    diets={diets}
                    />
                )
            })}
        </div>
    )
}

export default RecipeCards