import React, { Component } from 'react';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';


class LandingPage extends Component {
    render(){
        return(
        
            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">

      
            <main role="main" class="inner cover">
              <h1 class="cover-heading">Hi, this is the main page for DIY Mechanic</h1>
              <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            </main>
    
        
        <div class="row">
        <p class="col-sm"> This is more testing area</p>
        </div>
          <p> This way you dont need routes and can move freely within the app</p>
          <p> Ideally this would be a mobile app</p>
          <p> Best to minimize to the smallest view</p>
        <h4 className='mb-3 ml-4'>Please log in to manage services</h4>
        <button class='btn btn-outline-primary'><LoginModal/></button>
        <button class='btn btn-outline-primary'><RegisterModal/></button>
        </div>

        );
    }
}


export default LandingPage;