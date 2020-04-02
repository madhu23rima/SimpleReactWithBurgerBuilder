import React, { Component } from 'react'
import Button from '../../../components/UI/button/button'
import classes from './contactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/spinner/spinner'
class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postcode: ''
        },
        loading:false
    }

    render() {
        let form =(  <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your name"></input>
            <input className={classes.Input} type="text" name="email" placeholder="Your email"></input>
            <input className={classes.Input} type="text" name="street" placeholder="Your street"></input>
            <input className={classes.Input} type="text" name="postcode" placeholder="Your postcode"></input>
            <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if(this.state.loading){
            form =<Spinner></Spinner>
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
               {form}
            </div>
        );
    }

    orderHandler = (event) => {
        event.preventDefault();      
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: { name: 'Tom', address: '195 park street', email: 'abc@gmail.com' },
            deliveryMode: 'fastest'


        }
        axios.post('/orders.json', order)
            .then(order => {

                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(
                err => {

                    this.setState({ loading: false });
                }
            )

    }
}

export default ContactData;