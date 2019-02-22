import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Table from '../components/Table';

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
        schedule: search(state.arrival.schedule, state.searchQuery),
        event: state.arrival.event,
    };
    return props;
};

export default withRouter(connect(
    mapStateToProps,
)(Table));

