import * as ActionTypes from '../actions/actionTypes'

const INGREDIENT_PRICES = {
    salad: 5,
    bacon: 10,
    cheese: 4,
    meat: 15

}
const initialState = {

    totalPrice: 0,
    ingredients: null,
    error: false
    // ingredients: {
    //     salad: 0,
    //     bacon: 0,
    //     cheese: 0,
    //     meat: 0
    // },
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }


        case ActionTypes.REMOVE_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        case ActionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                  salad:   action.ingredients.salad,
                  cheese: action.ingredients.cheese,
                  bacon: action.ingredients.bacon,
                  meat: action.ingredients.meat
                },
                totalPrice: 0,
                error:false
            }
            case ActionTypes.FETCH_INGREDIENTS_FAILED:
                return{
                    ...state,
                    error:true
                }
    }
    return state;

}




export default reducer;