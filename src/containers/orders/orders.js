import React, { Component } from 'react'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/spinner/spinner'
import Order from '../../components/order/order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    render() {
        const orders = this.state.orders.map(order => {
            return (<Order key ={order.id} ingredients={order.ingredients} price={order.price}></Order>)

        })
        return (
            <div>
               {orders}
            </div>
        );
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then((res) => {

                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({ ...res.data[key], id: key });
                }
                this.setState({ loading: false, orders: fetchedOrders });

            })
            .catch((err) => {
                this.setState({ loading: false });
            })

    }

}

export default withErrorHandler(Orders, axios);