import React, { Component } from 'react'
import axios from '../../axios-orders'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/spinner/spinner'
import Order from '../../components/order/order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as Actions from '../../store/actions/index'
class Orders extends Component {
 
    render() {
        let orders =<Spinner></Spinner>
        if(!this.props.loading){
             orders = this.props.orders.map(order => {
                return (<Order key={order.id} ingredients={order.ingredients} price={order.price}></Order>)
    
            })
        }
      
        return (
            <div>
                {orders}
            </div>
        );
    }
    componentDidMount() {
        this.props.onFetchOrders()

    }

}
const mapStatetoProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        onFetchOrders: () => {
            dispatch(Actions.fetchOrders())
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(withErrorHandler(Orders, axios));