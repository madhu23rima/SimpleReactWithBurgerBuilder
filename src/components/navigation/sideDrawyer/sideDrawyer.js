import React from 'react'
import classes from './sideDrawyer.css'

import NavigationItems from '../navigationItems/navigationItems'
import Backdrop from '../../UI/backdrop/backdrop'
import AppCustomContainer from '../../../hoc/appCustomContainer'
const sideDrawyer = (props) => {

    let attachedClasses = [classes.SideDrawyer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawyer, classes.Open]
    }
    return (
        <AppCustomContainer>
            <Backdrop show={props.open} clicked={props.sideDrawyerClosed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
          
                <nav>
                    <NavigationItems ></NavigationItems>
                </nav>

            </div>
        </AppCustomContainer>
    )
}

export default sideDrawyer;