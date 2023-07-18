import { 
    GET_RECIPES, 
    FILTER_CREATED, 
    FILTER_DIET, 
    ORDER_NAME, 
    ORDER_BY_HS, 
    GET_BY_ID, 
    GET_BY_NAME, 
    GET_DIETS, 
    POST_RECIPE, 
    CLEAN_DETAIL, 
    PREV_PAGE, 
    NEXT_PAGE,
    HANDLE_PAGE  
} from "./action-types"

const initialState = {
    allRecipes : [],
    recipes : [],
    recipeDetail: {},
    allDiets: [],
    numPage: 1,
    // searchedRecipes: [],
}

const reducer = (state = initialState, actions) => {
    const { type, payload } = actions
    switch (type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: payload,
                allRecipes: payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                recipes: payload,
                allRecipes: payload
            }
        case GET_BY_ID: 
            return {
                ...state,
                recipeDetail: payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                recipeDetail: {}
            }
        case GET_DIETS: 
            return {
                ...state,
                allDiets: payload
            }
        case POST_RECIPE:
            // console.log(payload); aca se puede ver el objeto que se sube a la bd
            return {
                ...state,
                allRecipes: [...state.allRecipes, payload],
                recipes: [...state.recipes, payload]
            }
        case FILTER_DIET:
            const allRec = state.allRecipes
            const dietFilter = allRec.filter((rec) => rec.dietsName.includes(payload))
            return {
                ...state,
                recipes: payload === "allDiets" ? allRec : dietFilter
            }
        case FILTER_CREATED:  //All api db
            const originRecipes = state.allRecipes
            const fromApi = originRecipes.filter((recipe) => !isNaN(+recipe.id));
            const fromBDD = originRecipes.filter((recipe) => isNaN(+recipe.id));
            return {
                ...state,
                recipes: payload === "api" ? fromApi : (payload === "db" ? fromBDD : originRecipes)
            }
        case ORDER_NAME:
            const order = [...state.allRecipes]
            return {
                ...state,
                recipes: payload === "A"
                // ? order.sort((a, b) => a.name - b.name)
                // : order.sort((a, b) => b.name - a.name)
                ? order.sort((a, b) => a.name.localeCompare(b.name))
                : order.sort((a, b) => b.name.localeCompare(a.name))
            }
        case ORDER_BY_HS:
            const orderHS = [...state.allRecipes]
            const orderA = orderHS.sort((a, b) => a.healthScore - b.healthScore)
            const orderD = orderHS.sort((a, b) => b.healthScore - a.healthScore) 
            return {
                ...state,
                recipes: payload === "A" ? orderA : (payload === "D" ? orderD : orderHS)
            }
        case PREV_PAGE: {
            return {
                ...state,
                numPage: state.numPage - 1
            }
        }
        case NEXT_PAGE: {
            return {
                ...state,
                numPage: state.numPage + 1
            }
        }
        case HANDLE_PAGE: {
            return {
                ...state,
                numPage: payload
            }
        }
        default:
            return { ...state }
    }
}

export default reducer;