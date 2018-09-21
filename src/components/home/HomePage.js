import React from 'react';
import {Link} from 'react-router';

import Map from '../map/map';
import { withGoogleMap } from "react-google-maps";
import superagent from 'superagent';

class HomePage extends React.Component {


constructor(){
  super();
  this.state={
    venue: [],
    CurrentLatitude: 'unknown',
    CurrentLongitude: 'unknown',
    CoOrdinates: []
  };
  this.handleLanguage = this.handleLanguage.bind(this);
  //this.handleCenterChanged = this.handleCenterChanged.bind(this);
}


componentDidMount(){
navigator.geolocation.getCurrentPosition(
      (position) => {
       let log = "77.69";
       let lat = "12.98";
        this.setState({CurrentLatitude:lat});
        this.setState({CurrentLongitude:log});

          //const url = 'https://pure-fortress-87132.herokuapp.com/getMeNearByParkings?lng=77.69&lat=12.98'
          ///const url ='https://pure-fortress-87132.herokuapp.com/getMeNearByParkings?lng='+this.state.CurrentLongitude +'&lat=' + this.state.CurrentLatitude;
          const url ='https://localhost:8080/getMeNearByParkings?lng='+this.state.CurrentLongitude +'&lat=' + this.state.CurrentLatitude;
          
          superagent
          .get(url)
          .query(null)
          .set('Accept','test/json')
          .end((error,response) =>{
            const venues = response.body;
           // console.log("body"+ response)
            this.setState({
              venue:venues
            });
          });
      },
      (error) => alert("ERROR" + JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
}

handleLanguage(ordinates) {
        this.setState({CoOrdinates: ordinates})
    }

   // handleCenterChanged()
    //{
     // componentDidMount();
   // }

  render() {

const location ={
      lat:12.9816906,
      lng:77.6939942
    };

    const markers = [
      {
          location:{
          lat:12.9816906,
          lng:77.6939942
          }
      }
    ];


    return (
      <div>
        <Map center={location} markers={this.state.venue} onClick= {this.handleLanguage} />
        </div>
    );
  }
}

export default HomePage;
