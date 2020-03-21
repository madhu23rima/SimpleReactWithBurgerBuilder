import React, { Component } from 'react';
import Layout from './hoc/layout/layout'
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
      <BurgerBuilder></BurgerBuilder>
      </Layout>
     
    );
  }
}

export default App;
