import React from 'react'
import classes from './burger.css'
import BurgerIngredient from './burgerIngredient/burgerIngredient'
const burger = (props) => {


    let transformedIngredient = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })


    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if (transformedIngredient.length === 0) {
        transformedIngredient = "please add ingredients"
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredient}
            <BurgerIngredient type='bread-bottom' />
        </div>

    );
}

export default burger;