import React,  { Component } from 'react'
import classes from './modal.css'
import AppCustomContainer from '../../../hoc/appCustomContainer';
import Backdrop from '../backdrop/backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.show !== this.props.show || nextProps.children!== this.props.children );
    }
    
    componentWillUpdate(){
   
    }
    render(){
        return (
            <AppCustomContainer>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
                <div className={ [classes.Modal, (this.props.show ? classes['Show'] :  classes['Hidden'])].join (' ')}>
                    {this.props.children}
                </div>
            </AppCustomContainer>
    
        )
    }
   

}

export default Modal;