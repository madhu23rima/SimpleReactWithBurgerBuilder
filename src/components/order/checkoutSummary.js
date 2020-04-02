import React from 'react'
import Button from '../UI/button/button'
import classes from './checkoutSummary.css'
import Burger from '../burger/burger'

const checkoutSummary = (props) => {


    return (
        <div className={classes.CheckoutSummary}>
            <h1>
                We hope it tastes well!
           </h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients}></Burger>
                <Button buttonType="Danger" clicked={props.checkOutCancel}>CANCEL</Button>
                <Button buttonType="Success" clicked={props.checkOutContinue} >CONTINUE</Button>
            </div>
        </div>
    )
}

export default checkoutSummary;