import { EXAMPLE } from "./action-types"

const initialState = {
    recipes : [],
    allRecipes : [],
    data: [],
    diets: []
}

const reducer = (state = initialState, actions) => {
    const { type, payload } = actions
    switch (type) {
        case EXAMPLE:
            return {
                ...state,
                recipes: [ ...state.recipes, payload]
            }
        default:
            return { ...state }
    }
}

export default reducer;