import React from 'react'
import classes from './buildControls.css'
import BuildControl from './buildControl/buidlControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(cntrl => {
                return <BuildControl 
                    ingredientAdded={() => props.ingredientAdded(cntrl.type)}
                    ingredientRemove={() => props.ingredientRemoved(cntrl.type)}
                    key={cntrl.label} label={cntrl.label} 
                    disabled ={props.disabled[cntrl.type]}
                    />
            }
            )}
            <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.purchase} >ORDER NOW</button>
        </div>

    )

}
export default buildControls;