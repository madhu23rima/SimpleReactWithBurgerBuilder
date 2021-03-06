import React from 'react'
import classes from './navigationItem.css'
import {NavLink} from 'react-router-dom'

const navigationItem = (props) =>{
  
 
    return (       
      <li className={classes.NavigationItem}>
          <NavLink to={props.link}  > {props.children}</NavLink></li>
      
    )
}

export default navigationItem;