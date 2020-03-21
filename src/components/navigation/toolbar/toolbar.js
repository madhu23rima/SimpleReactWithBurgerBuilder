import React from 'react'
import classes from './toolbar.css'
import Logo from '../../logo/logo'

import NavigationItems from '../navigationItems/navigationItems'
import DrawyerToggle from '../sideDrawyer/drawyerToggle/drawyerToggle'
const toolbar = (props) =>{

    return (
     
            <header className={classes.Toolbar} >
                              
              <DrawyerToggle clicked={props.OpenSideDrawyer}/>
              
                <nav>
                    <NavigationItems />
                </nav>
            </header>
        
    )
}

export default toolbar;