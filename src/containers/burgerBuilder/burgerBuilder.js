import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import AppCustomContainer from '../../hoc/appCustomContainer'
import Burger from '../../components/burger/burger'
import BuildControls from '../../components/burger/buildControls/buildControls';
import Modal from '../../components/UI/modal/modal'
import OrderSummary from '../../components/burger/orderSummary/orderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/spinner/spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/index'


class BurgerBuilder extends Component {

    state = {

        puchasing: false,

    }

    render() {

        const disabledInfo = { ...this.props.ings };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = this.props.ings ?
            <OrderSummary
                ingredients={this.props.ings}
                cancel={this.purchaseCancelHandler}
                continue={this.puchaseContinueHandler}
                totalPrice={this.props.totalPrice} />
            : null

        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>
        }
        const burger = this.props.ings ?
            <AppCustomContainer>
                <Burger ingredients={this.props.ings} />
                <BuildControls ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.canOrder(this.props.ings)}
                    price={this.props.totalPrice}
                    purchase={this.purchaseHandler} />
            </AppCustomContainer>
            : this.props.error ? <p>Ingredients can not be loaded</p> :
                <Spinner></Spinner>

        return (
            <AppCustomContainer>
                <Modal show={this.state.puchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </AppCustomContainer>

        );

    }
    componentDidMount() {
        this.props.onInitIngredients();

    }
    purchaseHandler = () => {
        this.setState({ puchasing: true })
    }
    purchaseCancelHandler = () => {
        this.setState({ puchasing: false })
    }
    puchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');

    }

    canOrder(ingredients) {
        const hasIngredients = Object.keys(ingredients).reduce((result, ingrKey) => {
            return ingredients[ingrKey] > 0 || result
        }, false)
        return hasIngredients;

    }

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingrName) => {
            dispatch(Actions.addIngredient(ingrName))
        },
        onIngredientRemoved: (ingrName) => {
            dispatch(Actions.removeIngredient(ingrName))
        },

        onInitIngredients: () => {
            dispatch(Actions.initIngredients())
        },

        onInitPurchase: () => {
            dispatch(Actions.purchaseInit())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));