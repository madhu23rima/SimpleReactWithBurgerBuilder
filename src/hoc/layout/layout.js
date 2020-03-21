import React, { Component } from 'react'
import AppCustomContainer from '../appCustomContainer'
import classes from './layout.css'
import Toolbar from '../../components/navigation/toolbar/toolbar'
import SideDrawyer from '../../components/navigation/sideDrawyer/sideDrawyer'

class Layout extends Component {

    state = {
        showSideDrawyer: false
    }

    render() {
        return (
            <AppCustomContainer>
                <Toolbar OpenSideDrawyer={this.openSideDrawyerHandler}></Toolbar>
                <SideDrawyer open={this.state.showSideDrawyer} sideDrawyerClosed={this.closeSideDrawyerHandler} />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </AppCustomContainer>
        )
    }

    closeSideDrawyerHandler = () => {

        this.setState({ showSideDrawyer: false })
    }
    
    openSideDrawyerHandler = () =>{
        this.setState({ showSideDrawyer: true })
    }

}

export default Layout;