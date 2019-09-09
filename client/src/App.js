import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import ServiceList from './components/ServiceList';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap'

//share state between components
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { loadUser } from './actions/authActions';



class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
 render() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar/>
      <Container>
      <ItemModal/>
      <ServiceList/>
      </Container>
    </div>
    </Provider>
  );
 }
}

export default App;
