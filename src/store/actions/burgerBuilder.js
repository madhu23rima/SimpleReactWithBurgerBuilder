import * as ActionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingrName) =>{
    return {
        type : ActionTypes.ADD_INGREDIENTS, 
        ingredientName: ingrName       
    }
   
}


export const removeIngredient = (ingrName) =>{
    return {
        type : ActionTypes.REMOVE_INGREDIENTS, 
        ingredientName: ingrName       
    }
   
}

export const setIngredients = (ingrs) =>{
    return {
        type: ActionTypes.SET_INGREDIENTS,
        ingredients: ingrs
    }
}

export const fetchIngredientsFailed = (ingrs) =>{
    return {
        type: ActionTypes.FETCH_INGREDIENTS_FAILED,
    
    }
}

export const initIngredients =() =>{

    return (dispatch)=>{
        axios.get('/ingredients.json')
        .then(resp => {
         
            dispatch( setIngredients(resp.data))
        }

        )
        .catch(
            err => {
              dispatch(fetchIngredientsFailed())
            }
        )
    }
}

