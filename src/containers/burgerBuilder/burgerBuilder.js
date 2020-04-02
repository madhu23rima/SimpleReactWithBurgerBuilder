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
import spinner from '../../components/UI/spinner/spinner';
const INGREDIENT_PRICES = {
    salad: 5,
    bacon: 10,
    cheese: 4,
    meat: 15

}
class BurgerBuilder extends Component {

    state = {
        // ingredients: {
        //     salad: 1,
        //     bacon: 1,
        //     cheese: 2,
        //     meat: 2
        // },
        totalPrice: 0,
        purchasable: false,
        puchasing: false,
        loading: false,
        ingredients: null,
        error: false
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = this.state.ingredients ?
            <OrderSummary
                ingredients={this.state.ingredients}
                cancel={this.purchaseCancelHandler}
                continue={this.puchaseContinueHandler}
                totalPrice={this.state.totalPrice} />
            : null

        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>
        }
        const burger = this.state.ingredients ?
            <AppCustomContainer>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredienthandler}
                    ingredientRemoved={this.removeIngredienthandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    purchase={this.purchaseHandler} />
            </AppCustomContainer>
            : this.state.error ? <p>Ingredients can not be loaded</p> :
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
        axios.get('/ingredients.json')
            .then(resp => {

                const ingrs = resp.data;
                this.setState({ ingredients: ingrs })
            }

            )
            .catch(
                err => {
                    this.setState({ error: true })
                }
            )
    }
    purchaseHandler = () => {
        this.setState({ puchasing: true })
    }
    purchaseCancelHandler = () => {
        this.setState({ puchasing: false })
    }
    puchaseContinueHandler = () => {
       
        const queryParams =[];
        for( let ingrName  in this.state.ingredients){
            queryParams.push( encodeURIComponent(ingrName) + '=' +encodeURIComponent(this.state.ingredients[ingrName]))
        }
        queryParams.push('price='+ this.state.totalPrice);
        const queryString = queryParams.join('&')
        this.props.history.push(
            {
                pathname: '/checkout',
                search: '?' + queryString

            });

    }
    updatePurchase(ingredients) {
        const hasIngredients = Object.keys(ingredients).reduce((result, ingrKey) => {
            return ingredients[ingrKey] > 0 || result
        }, false)
        this.setState({ purchasable: hasIngredients })

    }
    addIngredienthandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        let updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ ingredients: { ...updatedIngredients }, totalPrice: updatedPrice })
        this.updatePurchase(updatedIngredients);
    }

    removeIngredienthandler = (type) => {
        const ingrCount = this.state.ingredients[type] - 1;
        if (ingrCount < 0) {
            return;
        }
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = ingrCount;
        let updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ ingredients: { ...updatedIngredients }, totalPrice: updatedPrice })
        this.updatePurchase(updatedIngredients);


    }
}


export default WithErrorHandler(BurgerBuilder, axios);