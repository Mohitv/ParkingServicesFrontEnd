import React, {PropTypes} from 'react';
import ParkingListRow from './ParkingListRow';

const ParkingList = ({parkingslots}) => {
  return (


  <div className="sidebar">
     <div className="panel panel-default">
      <div className="panel-heading">Available Parking Slots</div>
      <div className="panel-body">
        <div className="list-group">
          {parkingslots.map(parkingslot =>
                <ParkingListRow key={parkingslot._id} parkingslot={parkingslot}/>
              )}
        </div>
      </div>
    </div>
    </div>


  );
};

ParkingList.propTypes = {
  parkingslots: PropTypes.array.isRequired
};

export default ParkingList;
