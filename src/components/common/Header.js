import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import  logoimg from '../../images/Logo.png';
import  carbanner from '../../images/Carbanner.jpg';


const Header = ({loading}) => {
  return (

    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="" href="#"> <img src={logoimg} style={{ width:50, height:50}} alt="logo" /> Get My Parking - </a> <span className="subheading">Find Parking. Book.</span>
          </div>
        </div>
      </nav>




  /*  <div className="App-header">
           
         
              <div className="App-img">
                <img src={logoimg} style={{ width:98, height:98}} alt="logo" />
                </div>
                <div className="App-headerText">
                  <h2>GET MY PARKING</h2>
                </div>
                <div>
                  <h4>Find Parking. Book.</h4>
                </div>                  
              </div>  */       
            
        
   
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
