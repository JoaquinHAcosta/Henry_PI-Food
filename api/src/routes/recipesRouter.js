const { Router } = require("express")
const { getRecipeByIdHandler, postRecipeHandler, getRecipesHandler } = require("../handlers/recipeHandler")
const recipesRouter = Router()

recipesRouter.get("/", getRecipesHandler)

recipesRouter.get("/:idRecipe", getRecipeByIdHandler)

recipesRouter.post("/createrecipe", postRecipeHandler)

module.exports = recipesRouter