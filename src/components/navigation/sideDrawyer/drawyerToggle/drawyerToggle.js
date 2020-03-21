import React from 'react'
import classes from './drawyerToggle.css'

const drawyerToggle = (props) => {
  
    return (
        <div onClick={props.clicked} className={classes.DrawerToggle}>
             <div></div>
             <div></div>
             <div></div>
        </div>
    
    )
}
export default drawyerToggle;