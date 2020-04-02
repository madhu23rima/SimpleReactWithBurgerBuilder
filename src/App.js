import React, { Component } from 'react';
import Layout from './hoc/layout/layout'
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder';
import Checkout from './containers/checkout/checkout';
import { Route, Switch } from 'react-router-dom'
import Orders from './containers/orders/orders';
class App extends Component {
  render() {
    return (

      <Layout>
        <Switch>

          <Route path="/checkout" component={Checkout}>

          </Route>
          <Route path="/orders" component={Orders}>

          </Route>
          <Route path="/" exact component={BurgerBuilder}>

          </Route>
        </Switch>



      </Layout>

    );
  }
}

export default App;
