import * as ActionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: ActionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: ActionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart =() =>{
    return {
        type: ActionTypes.PURCHASE_BURGER_START       
    }
}


export const purchaseBurger =(orderdata) =>{

    return (dispatch) =>{
        dispatch( purchaseBurgerStart());
        axios.post('/orders.json', orderdata)
        .then(resp => {       
          dispatch(purchaseBurgerSuccess( resp.data.name , orderdata));
        })
        .catch(
            err => {
                
                dispatch(purchaseBurgerFail(err));              
            }
        )
    }
}



export const purchaseInit = () =>{

    return {
        type: ActionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersStart = () =>{
    return{
        type: ActionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrdersSucess = (orders) =>{
    return{
        type: ActionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    }
}


export const fetchOrdersFail = (error) =>{
    return{
        type: ActionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrders = ()=>{
    return (dispatch) =>{      

        dispatch( fetchOrdersStart());
        axios.get('/orders.json')
        .then(res => {    
            const fetchedOrders = [];
            for (let key in res.data) {
                fetchedOrders.push({ ...res.data[key], id: key });
            }      
          dispatch(fetchOrdersSucess( fetchedOrders));
        })
        .catch(
            err => {                
                dispatch(fetchOrdersFail(err));              
            }
        )
    }
    
}