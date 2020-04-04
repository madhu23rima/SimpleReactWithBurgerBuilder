import * as ActionTypes from '../actions/actionTypes';


const initialState = {
    orders: [],
    loading: false,
    error: null,
    purchased: false

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = { ...action.orderData, id: action.orderId };
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)

            }
        case ActionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case ActionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }
        case ActionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders:action.orders
            }
        case ActionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            }

        default:
            return state;

    }
}

export default reducer;