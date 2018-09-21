import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as nearByParkingAction from '../../actions/nearbyparkingaction';
import {browserHistory} from 'react-router';
import ParkingSubList from './ParkingSubList';
import Map from '../map/map';
import { withGoogleMap } from "react-google-maps";
import superagent from 'superagent';
import toastr from 'toastr';

class NearByParkingPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state ={
      selectedSlot:'',
      parkingslots: this.props.parkingslots,
      venue:this.props.parkingslots,
      SubSlots: this.props.SubSlots,
      CurrentLatitude:null,
      CurrentLongitude:null
    };
     this.clickedSlot = this.clickedSlot.bind(this);
     this.selectedSlot = this.selectedSlot.bind(this);
     this.bookParking = this.bookParking.bind(this);
     this.dragend = this.dragend.bind(this);
     this.handleMapMounted = this.handleMapMounted.bind(this);
     this.onClose = this.onClose.bind(this);
      this.MarkerMouseOver = this.MarkerMouseOver.bind(this);

  }

  componentDidMount(){

    navigator.geolocation.getCurrentPosition(
      (position) => {
       let log = position.coords.longitude;
       let lat = position.coords.latitude;
        this.setState({CurrentLatitude:lat});
        this.setState({CurrentLongitude:log});
        this.props.actions.loadNearByParkings(this.state.CurrentLongitude,this.state.CurrentLatitude);

      },
      (error) => alert("ERROR" + JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

    document.getElementById("mapMainContainer").style.height = (window.innerHeight-80)+'px';

  }

 componentWillReceiveProps(nextProps) {
      this.setState({venue:  nextProps.parkingslots});

  }
  selectedSlot(event) {
    //debugger;
    return this.setState({ selectedSlot: event.target.value });
   }
onClose(event){
 // debugger;
  this.setState({SubSlots: null});
}
   bookParking(event){
     event.preventDefault();
    //  debugger;
    let bookingOject = {
       "email": "test1@emc.com",
       "booking":[
         {
           "parkingSlotId": this.state.parkingslotid,
          "parkingSubSlotId": parseInt(this.state.selectedSlot)
         }],
        "vehicle": [{"registrationNumber": "KA03MC2231","vehicletype":"Car"
            }]
     };
     this.props.actions.saveBookingParking(bookingOject)
     .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
      });
   }

   redirect() {
      this.setState({SubSlots: null});
    toastr.success('Booking success');
    this.context.router.push('/nearbyparking');
  }


   clickedSlot(selectedmarker) {     
      this.setState({SubSlots: selectedmarker});
      this.setState({parkingslotid:selectedmarker.parkingSlotId})
      this.setState({parkingName:selectedmarker.name})
    }

MarkerMouseOver(venueItem){
    console.log("HI");
}

      handleMapMounted(map) {
          this._map = map;
       }
  dragend(event){
   let nextpos = this._map.getCenter();
   const nextposJSON=nextpos.toJSON();
   this.props.actions.loadNearByParkings(nextposJSON.lng,nextposJSON.lat);
       //this.props.actions.loadNearByParkings(latitude.lng,latitude.lat);
  }

  render() {
    
          let location ={
            lat:12.9816906,
            lng:77.6939942
          };

        if(this.state.CurrentLatitude === null && this.state.CurrentLongitude ===null){
            location ={
            lat:12.9816906,
            lng:77.6939942
          };
        }
        else
        {
          location ={
            lat:this.state.CurrentLatitude,
            lng:this.state.CurrentLongitude
          };
        }
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
              <div className="sidebar-outer" id="mapMainContainer">
                    <Map center={location} markers={this.state.venue} onSlotSelected= {this.clickedSlot} onMapMounted={this.handleMapMounted} onDragend={this.dragend} onMarkerOver={this.MarkerMouseOver}/>
              </div>
                {this.state.SubSlots ? <ParkingSubList subslots={this.state.SubSlots.parkingSubSlots}
                 parkingslotid ={this.state.SubSlots.parkingSlotId} parkingName={this.state.parkingName} selectedSlot={this.state.selectedSlot} onChange={this.selectedSlot} onBooking = {this.bookParking} onPopUpClose ={this.onClose}/> : null}
      </div>
    );
  }
}

NearByParkingPage.propTypes = {
  parkingslots: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  SubSlots:PropTypes.object
};
//Pull in the React Router context so router is available on this.context.router.
NearByParkingPage.contextTypes = {
  router: PropTypes.object
};
function mapStateToProps(state, ownProps) {
  return {
    parkingslots: state.parkingslots,
    SubSlots : state.SubSlots
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(nearByParkingAction, dispatch)

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NearByParkingPage);
