import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Flight from '../components/Flight';


const searchFlightByUid = (flights, uid) => {
    return flights.find(f => f.thread.uid === uid);
};

const mapStateToProps = (state, routeParams) => {
    const { event, uid } = routeParams.match.params;
    const flights = event === 'arrival' ? state.arrival.schedule : state.departure.schedule;
    const props ={
        flight: searchFlightByUid(flights, uid),
    };
    return props;
};

export default withRouter(connect(
    mapStateToProps,
)(Flight));