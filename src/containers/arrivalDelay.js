import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import TableDelay from '../components/TableDelay';

/*flights === schedule === array
 */
const search = (flights, searchQuery) => {
    return flights.filter(i =>
        i.thread.number.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        i.thread.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
};

const mapStateToProps = state => {
    const props ={
        schedule: search(state.arrivalDelay.schedule, state.searchQuery),
        event: state.arrivalDelay.event,
    };
    return props;
};

export default withRouter(connect(
    mapStateToProps,
)(TableDelay));
