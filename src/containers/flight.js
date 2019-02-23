import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Flight from '../components/Flight';


const searchFlightByUid = (flights, uid) => {
    return flights.find(f => f.thread.uid === uid);
};

const findFlights = (state, routeParams) => {
    const { event } = routeParams.match.params;
    switch (event) {
        case 'arrival': {
            return state.arrival.schedule;
        }
        case 'arrivalDelay': {
            return state.arrivalDelay.schedule;
        }
        case 'departure': {
            return state.departure.schedule;
        }
        case 'departureDelay': {
            return state.departureDelay.schedule;
        }
        default:
            return state.arrivale.schedule;
    }
};

const mapStateToProps = (state, routeParams) => {
    const { uid } = routeParams.match.params;
    const flights = findFlights(state, routeParams);
    const props ={
        flight: searchFlightByUid(flights, uid),
    };
    return props;
};

export default withRouter(connect(
    mapStateToProps,
)(Flight));