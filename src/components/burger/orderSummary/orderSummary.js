import React, { Component } from 'react'
import AppCustomContainer from '../../../hoc/appCustomContainer'
import Button from '../../UI/button/button'

class OrderSummary extends Component{
      //this could be a function based componenet . Converted this to CB due to testing performance
    componentWillUpdate(){
        console.log('Order Summary Update');
    }
    
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingrKey => {
            return (
                <li key={ingrKey}>
                    <span style={{ textTransform: 'çapitalize' }}>{ingrKey}</span> : {this.props.ingredients[ingrKey]}
                </li>
            )

        })
    
        return (
            <AppCustomContainer>
                <h3> Your Order</h3>
                <p> A delicious burger with the following ingredients:</p>
                {ingredientSummary}
                <p> <strong>Total price : {this.props.totalPrice.toFixed(2)}</strong> </p>
                <p>Do you want to continue?</p>
          
                <Button buttonType ="Danger" clicked={this.props.cancel}>CANCEL</Button>
                <Button buttonType ="Success" clicked={this.props.continue}>CONTINUE</Button>
            </AppCustomContainer>
        )
    }
   
   
}

export default OrderSummary;