require('dotenv').config();
const { Recipe, Diets } = require("../db")
const axios = require("axios")
const { API_KEY } = process.env
const API_URL = "https://api.spoonacular.com/recipes"
const { Op } = require("sequelize")


const getRecipeById = async (idRecipe) => {
    try {
        if (isNaN(+idRecipe)) {
            const recipe = await Recipe.findByPk(idRecipe, {include: [{model: Diets, through:{attributes:[]}}]})
            return recipe
        } else {
            //ejemplo = https://api.spoonacular.com/recipes/1/information?apiKey=1f9d8f6742b748d0a2eec9ec5a00fbfc
            const { data } = await axios.get(`${API_URL}/${idRecipe}/information?apiKey=${API_KEY}`)

            const recipe = {
                id: idRecipe,
                name: data.title,
                image: data.image,
                healthScore: data.healthScore,
                summary: data.summary.replace(/(&nbsp;|<([^>]+)>)/ig, ""),
                dietsName: data.diets,
                steps: data.analyzedInstructions[0]?.steps.map((element) => {
                    return {
                        number: element.number,
                        step: element.step
                    }
                }),
                created: false
            }
            return recipe
        }
    } catch (error) {
        return { error: `No existe la receta con ID: ${idRecipe}` }
    }


}

//funcion generica, se puede mover a src/utils/index.js e importarla para usarla
const infoCleaner = (array) => array.map(recipe => {
    return  {
        id: recipe.id,
        name: recipe.title,
        dietsName: recipe.diets,
        imagen: recipe.image,
        summary: recipe.summary.replace(/(&nbsp;|<([^>]+)>)/ig, ""),
        healthScore: recipe.healthScore,
        steps: recipe.analyzedInstructions[0]?.steps.map((element) => {
            return {
                number: element.number,
                step: element.step
            }
        }),
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenFree: recipe.glutenFree
    } 
})
const getRecipeByName = async (name) => {
    //funciona para la api falta agregarle funcionalidad con la db "https://api.spoonacular.com/recipes/complexSearch?titleMatch=${name}&apiKey=b2e567c3deb34b60ac342d1872d11bd8

    const { data } = await axios.get(`${API_URL}/complexSearch?titleMatch=${name}&apiKey=${API_KEY}&addRecipeInformation=true`)

    const apiCoincidences = infoCleaner(data.results)

    const dbCoincidences = await Recipe.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      })
    return [...apiCoincidences, ...dbCoincidences]
}


const getAllRecipes = async () => {

    const infoDb = await Recipe.findAll()

    //ej= https://api.spoonacular.com/recipes/complexSearch?apiKey=b2e567c3deb34b60ac342d1872d11bd8&number=10&addRecipeInformation=true`
    const { data } = await axios.get(`${API_URL}/complexSearch?apiKey=${API_KEY}&number=15&addRecipeInformation=true`)

    const infoApi = data.results
    const recipeApi = infoCleaner(infoApi)

    return [...recipeApi, ...infoDb]
}







module.exports = {
    getRecipeById,
    getRecipeByName,
    getAllRecipes
}