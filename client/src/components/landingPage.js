import React, { Component } from 'react';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';


class LandingPage extends Component {
    render(){
        return(
        
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">

      
              <main role="main" class="inner cover">
              <h1 class=" text-center text-uppercase">Welcome to DIY Mechanic</h1>
              <p class="text-center"> This is v1.0 of the DIY Mechanic React App</p>
              <p class="text-center"> Currently the app features token based login/registration, connection with MongoDB cloud server, simple CRUD operations on the services list</p>
              <p class="text-center"> The app still needs the following : Styling, Ability to edit service, Ability to add "vehicles" to your garage, cleaner UI, ability to see upcoming services along with reminders</p>
              <p class="text-center"> Currently utilizing all the React skills I have learned </p>
              <h4 class="text-center">Please log in to manage services</h4>
              </main>

              <div class="d-flex  justify-content-center">
              <button class='btn btn-outline-primary'><LoginModal/></button>
              <button class='btn btn-outline-primary'><RegisterModal/></button>
              </div>
        </div>

        );
    }
}


export default LandingPage;