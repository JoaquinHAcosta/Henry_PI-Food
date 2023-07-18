export default controlForm = (input) => {
    const reg = new RegExp('^[0-9]+$');
    let errors = {};
    if (!input.title) errors.title = 'please put the title of the recipe';
    if (!input.summary) errors.summary = 'please put the summary of the recipe';
    if (input.healthScore < 0 || input.healthScore > 100 || !reg.test(input.healthScore))
      errors.healthScore = 'put a healthScore between 0-100';
    if (!input.image) errors.image = "please add an image to your recipe";
    if (!input.typeDiets || input.typeDiets.length === 0) errors.typeDiets = "please select at least one type of diet for your recipe";
  
    return errors;
  }