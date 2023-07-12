const { getRecipeById, getRecipeByName, getAllRecipes } = require("../controllers/RecipeControllers")
const { Recipe } = require("../db")

const getRecipeByIdHandler = async (req, res) => {
    const { idRecipe } = req.params

    try {
        const recipe = await getRecipeById(idRecipe)

        return res.status(200).json(recipe)
    } catch (error) {
        return res.status(400).send({error: error.message})
    }
}

const getRecipesHandler = async (req, res) => {
    try {
        const { name } = req.query
        const result = name ? await getRecipeByName(name) : await getAllRecipes()
        
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const postRecipeHandler = async (req, res) => {
    const { name, image, summary, healthScore, steps } = req.body

    try {
        const newRecipe = await Recipe.create({name, image, summary, healthScore, steps})
        
        return res.status(200).json(newRecipe)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}
module.exports = {
    getRecipeByIdHandler,
    postRecipeHandler,
    getRecipesHandler
}