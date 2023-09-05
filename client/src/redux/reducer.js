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
    HANDLE_PAGE,  
    RESET_RECIPES,
    RESET_FILTERS
} from "./action-types"

const initialState = {
    allRecipes : [],
    recipes : [],
    recipeDetail: {},
    allDiets: [],
    numPage: 1,
    searchedRecipes: [],
    stringSearched: "",
    filterDiet: "allDiets",
    filterOrigin: "All",
    orderAlph: "Default",
    orderHS: "M",
}
//[1,2,3,4,5,6]
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
                stringSearched: actions.stringSearch
            }
        case GET_BY_ID: 
            return {
                ...state,
                recipeDetail: payload
            }
        case GET_DIETS: 
            return {
                ...state,
                allDiets: payload
            }
        case POST_RECIPE:
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
                recipes: payload === "allDiets" ? allRec : dietFilter,
                filterDiet: payload
            }
        case FILTER_CREATED:  //All api db
            const originRecipes = state.allRecipes
            const fromApi = originRecipes.filter((recipe) => !isNaN(+recipe.id));
            const fromBDD = originRecipes.filter((recipe) => isNaN(+recipe.id));
            return {
                ...state,
                recipes: payload === "api" ? fromApi : (payload === "db" ? fromBDD : originRecipes),
                filterOrigin: payload
            }
        case ORDER_NAME:
            const order = [...state.recipes]
            return {
                ...state,
                recipes: payload === "A"
                ? order.sort((a, b) => a.name.localeCompare(b.name))
                : order.sort((a, b) => b.name.localeCompare(a.name)),
                orderAlph: payload
            }
        case ORDER_BY_HS:
            const orderHS = [...state.recipes]
            const orderA = orderHS.sort((a, b) => a.healthScore - b.healthScore)
            const orderD = orderHS.sort((a, b) => b.healthScore - a.healthScore) 
            return {
                ...state,
                recipes: payload === "A" ? orderA : (payload === "D" ? orderD : orderHS),
                orderHS: payload
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
        case RESET_RECIPES: {
            return {
                ...state,
                recipes: state.allRecipes
            }
        }
        case CLEAN_DETAIL: {
            return {
                ...state,
                recipeDetail: {}
            }
        }
        case RESET_FILTERS: {
            return {
                ...state,
                recipes: state.allRecipes,
                filterDiet: "allDiets",
                filterOrigin: "All",
                orderAlph: "Default",
                orderHS: "M",
                stringSearched: ""
            }
        }
        default:
            return { ...state }
    }
}

export default reducer;