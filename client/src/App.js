import React from 'react';
import AppNavbar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceList from './components/ServiceList';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <ServiceList/>
    </div>
  );
}

export default App;
