import React from 'react'
import classes from './buildControl.css'

const buildControl = (props) =>{
    return(

        <div className={classes.buildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}  onClick={ props.ingredientRemove} disabled={props.disabled} >Less</button>
            <button className={classes.More} onClick={ props.ingredientAdded}>More</button>
        </div>
    );

}
export default buildControl;