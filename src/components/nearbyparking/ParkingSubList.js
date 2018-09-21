import React, {PropTypes} from 'react';
import  carimage from '../../images/car.png';
import  bikeimage from '../../images/motorbike.png';
const ParkingSubList = ({subslots,parkingslotid,parkingName,onChange,selectedSlot,onBooking,onPopUpClose}) =>{
 //debugger;


function close() {
    console.log('HI');
}

  return (

          <div id="bookpanel" className="panel panel-primary border-0 center-block">
              <div className="panel-heading">{parkingName} Sub Slots <a href="#" className="btn-close" onClick={onPopUpClose} >&times;</a></div>
              <div className="panel-body" style={{padding:'15px 40px'}}>
              {subslots.map(subslot =>
                        <div key={subslot._id}>
                            <div className = "thumbnail">
                              <img className="vehicleImg" src = {subslot.parkingType==='CAR_24'? carimage : bikeimage} alt = "Generic placeholder thumbnail"/>

                            </div>
                          <div className = "caption">
                            <p> <input type="radio" id="item4" disabled={subslot.Availability === 0}
                             value= {subslot.parkingSubSlotId}
                             checked= {parseInt(selectedSlot) === subslot.parkingSubSlotId}
                             onChange={onChange} /><strong> Availability</strong> ({subslot.Availability}) </p>
                        </div>
                        </div>
                      )}
                  </div>
                     <div className="panel-footer">
                         <button id="singlebutton" name="singlebutton" className="btn btn-outline btn-primary park-btn" onClick = {onBooking}>Book Parking</button>
                   </div>
              </div>

    );

}




ParkingSubList.propTypes = {
  subslots: PropTypes.array.isRequired,
  parkingName: PropTypes.array.isRequired,
  parkingslotid:PropTypes.number.isRequired,
  selectedSlot:PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
  onBooking: PropTypes.func.isRequired,
  onPopUpClose:PropTypes.func.isRequired
};


export default ParkingSubList;
