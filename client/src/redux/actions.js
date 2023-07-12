import { GET_RECIPES, FILTER_CREATED, FILTER_DIET, ORDER_NAME, ORDER_BY_HS, GET_BY_ID, GET_BY_NAME, GET_DIETS, DELETE_RECIPE  } from "./action-types"
import axios from "axios"


export const getAllRecipes = () => {
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/recipes")
        return dispatch({type: GET_RECIPES, payload: response.data})
    }
}

export const filterRecipesByDiet = () => {
    return { type: FILTER_DIET, payload}
}

export const filterCreated = () => {
    return { type: FILTER_CREATED, payload}
}

export const orderByName = () => {
    return { type: ORDER_NAME, payload}
}

export const orderByHs = () => {
    return { type: ORDER_BY_HS, payload}
}

export const getRecipeById = (id) => {
    return async function(dispatch){
        const response = await axios.get(`/recipes/${id}`)
        return dispatch({ type: GET_BY_ID, payload: response.data})
    }
}

export const getRecipeByName = (name) => {
    return async function(dispatch){
        const response = await axios.get(`/recipes?name=${name}`)
        return dispatch({ type: GET_BY_NAME, payload: response.data})
    }
}

export const getTypeDiets = () => {
    return async function(dispatch){
        const response = await axios.get("/diets")
        return dispatch({ type: GET_DIETS, payload: response.data})
    }
}

export const postRecipes = (payload) => {
    return async function(dispatch){
        const response = await axios.post("/recipe", payload)
        return response
    }
}

export const deleteRecipes = (id) => {
    return async function(dispatch){
        const response = await axios.delete(`/recipe/delete/${id}`)
        return dispatch({ type: DELETE_RECIPE, payload: response.data })
    }
}