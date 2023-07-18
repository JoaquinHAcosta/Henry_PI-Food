const { getRecipeById, getRecipeByName, getAllRecipes } = require("../controllers/RecipeControllers")
const { Food, Recipe, Diets } = require("../db")

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
    try {
        const { name, image, summary, healthScore, steps, typeDiets, dietsName } = req.body
    //   console.log(req.body)
      if(!name || !image || !summary || !healthScore || !steps || !typeDiets || !dietsName) {
        throw new Error ("All fields are required for validation.")
      } else {
        
        let newRecipe = await Recipe.findOne({ where: { name } });
        
        if (!newRecipe) {
          newRecipe = await Recipe.create({
            name,
            image,
            summary,
            healthScore,
            steps,
            dietsName  
          });
        }
        
        const selectedDiets = await Diets.findAll({
          where: { id: typeDiets },
        });
        if (!selectedDiets.length) {
          
          throw new Error('No diet found with the provided IDs');
        }
        
        await newRecipe.addDiets(selectedDiets);
       
    
        const resultRecipe = await Recipe.findByPk(newRecipe.id, {
          includes: [Diets]
        })
        console.log({resultRecipe})
        res.status(200).json(resultRecipe)
      }
    } catch (error) {
      if (error.message === "No diets found with the provided IDs") {
        res.status(400).json({ error: error.message });
      } else if (error.message === "All fields are required for validation.") {
        res.status(404).json({error: error.message})
      } else {
        res.status(500).json({ error: "An error occurred while creating the recipe" });
      }
      console.log(error)
    }
  };




module.exports = {
    getRecipeByIdHandler,
    postRecipeHandler,
    getRecipesHandler
}
