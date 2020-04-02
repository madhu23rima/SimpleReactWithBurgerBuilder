import React from 'react'
import classes from './order.css'


const order = (props) => {

    let ingredients = [];
    for ( let ingrName in  props.ingredients){
        ingredients.push({
            name: ingrName,
            amount:  props.ingredients[ingrName] 
        })
    }

    const ingrOutput = ingredients.map ( ingr =>{
        return ( <span key={ingr.name}
             style={{
                 textTransform: 'capitalize',
                 display: 'inline-block',
                 margin: '0 8px',
                 border : '1px solid #ccc',
                 padding: 5
                }
                 }> 
        {ingr.name} : ({ingr.amount}) </span>)
    })
   
    return (
        <div className={classes.Order}>
         <p>{ingrOutput} </p>
         <p>Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default order;