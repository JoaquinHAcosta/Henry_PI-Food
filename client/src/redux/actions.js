import { 
    GET_RECIPES, 
    GET_BY_NAME, 
    GET_BY_ID, 
    GET_DIETS, 
    POST_RECIPE,
    FILTER_DIET, 
    FILTER_CREATED, 
    ORDER_NAME, 
    ORDER_BY_HS, 
    CLEAN_DETAIL,
    PREV_PAGE,
    NEXT_PAGE,
    HANDLE_PAGE 
  } from "./action-types"
import axios from "axios"


export const getAllRecipes = () => {
    return async function(dispatch){
        const { data } = await axios.get("http://localhost:3001/recipes")
        return dispatch({type: GET_RECIPES, payload: data})
    }
}

export const getRecipeByName = (name) => {
    return async function(dispatch){
        const { data } = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        console.log(data);
        return dispatch({ type: GET_BY_NAME, payload: data})
    }
}

export const getRecipeById = (id) => {
    return async function(dispatch){
        const { data } = await axios.get(`http://localhost:3001/recipes/${id}`)
        return dispatch({ type: GET_BY_ID, payload: data})
    }
}

export const getTypeDiets = () => {
    return async function(dispatch){
        const { data } = await axios.get("http://localhost:3001/diets")
        return dispatch({ type: GET_DIETS, payload: data})
    }
}

export const postRecipes = (newRecipe) => {
    return async function(dispatch){
        try {
            const { data } = await axios.post("http://localhost:3001/recipes/createrecipe", newRecipe)

            return dispatch({ type: POST_RECIPE, payload: data})
        } catch (error) {
            console.error(error)
        }
    }
}

export const filterByDiet = (diet) => {
    return { type: FILTER_DIET, payload: diet}
}

export const filterByOrigin = (origin) => {
    return { type: FILTER_CREATED, payload: origin}
}

export const orderByName = (order) => {
    return { type: ORDER_NAME, payload: order}
}

export const orderByHs = (order) => {
    return { type: ORDER_BY_HS, payload: order}
}

export const cleanDetail = ( payload ) => {
    return { type: CLEAN_DETAIL, payload: payload }
}

export const prevPage = () => {
    return { type: PREV_PAGE }
}

export const nextPage = () => {
    return { type: NEXT_PAGE }
}

export const handlePage = (num) => {
    return { type: HANDLE_PAGE, payload: num}
}