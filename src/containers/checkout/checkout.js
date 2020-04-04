import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import CheckoutSummary from '../../components/order/checkoutSummary';
import ContactData from './contactData/contactData';
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/index'

class Checkout extends Component {

    render() {
        let summary = <Redirect to="/"></Redirect>
       
      
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased?  <Redirect to="/"></Redirect> : null;
            summary = (
                <div>
                   {purchasedRedirect}
                    <CheckoutSummary ingredients={this.props.ings}
                        checkOutCancel={this.checkOutCancelHandler}
                        checkOutContinue={this.checkOutContinuehandler}>
                    </CheckoutSummary>

                    <Route path={this.props.match.path + '/contact'}
                        component={ContactData}></Route>
                </div>
            )

        }
        return (
            <div>
                {summary}
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

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps)(Checkout);