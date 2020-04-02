import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CheckoutSummary from '../../components/order/checkoutSummary';
import ContactData from './contactData/contactData';


class Checkout extends Component {
    state = {
        ingredients: {},
        totalPrice: 0
    }
    componentDidMount() {

        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price =0
        for (let param of query.entries()) {
            if(param[0]==='price'){
                price =+param[1];

            }else{
                ingredients[param[0]] = +param[1];
            }
        

        }

        this.setState({ ingredients: ingredients , totalPrice: price});
    }
    render() {

     
        return (
            <div>

            
                <CheckoutSummary ingredients={this.state.ingredients}
                    checkOutCancel={this.checkOutCancelHandler}
                    checkOutContinue={this.checkOutContinuehandler}>
                </CheckoutSummary>
               
                <Route path={this.props.match.path + '/contact'} 
                render ={(props) => (<ContactData ingredients ={this.state.ingredients} price ={this.state.totalPrice} {...props}></ContactData>)}></Route>
               
            </div>
        );

    }
    checkOutCancelHandler = () => {
        this.props.history.goBack()

    }
    checkOutContinuehandler = () => {
        this.props.history.push('/checkout/contact')
    }
}

export default Checkout;