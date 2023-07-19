const validations = (recipe) => {

    let errors = {};

    if (!recipe.name) errors.name = "Please put the name of the recipe";

    if (!recipe.summary) errors.summary = "Please put the summary of the recipe";

    if (!recipe.image) errors.image = "Please add an image to your recipe";

    if (!recipe.typeDiets || recipe.typeDiets.length === 0) errors.typeDiets = "Please select at least one type of diet for your recipe";
  
    return errors;
  }

  export default validations