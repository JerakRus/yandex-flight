import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Table from '../components/TableSchedule';

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
        schedule: search(state.departure.schedule, state.searchQuery),
        event: state.departure.event,
    };
    return props;
};

export default withRouter(connect(
    mapStateToProps,
)(Table));

