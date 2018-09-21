import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import * as nearByParkingAction from '../../actions/nearbyparkingaction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class ParkingListRow extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
      parkingslot: Object.assign({}, props.parkingslot)
    };
    this.ShowSubSlot = this.ShowSubSlot.bind(this);
   }
    ShowSubSlot(event) {
    event.preventDefault();
    //debugger;
    this.props.actions.loadSubSlots(this.state.parkingslot);
   }
   render() {
        return (
          <a href={'#'} className="list-group-item" onClick={this.ShowSubSlot}>
            <h4 className="list-group-item-heading">{this.state.parkingslot.name}</h4>
        </a>
      );
   }
}

ParkingListRow.propTypes = {
  parkingslot: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {

return({
});
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(nearByParkingAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingListRow);
