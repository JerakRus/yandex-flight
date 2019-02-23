import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import App from '../components/App';


const mapStateToProps = state => {
    const props ={
        isDepartureLoaded: state.isDepartureLoaded,
        isDepartureDelayLoaded: state.isDepartureDelayLoaded,
        isArrivalLoaded: state.isArrivalLoaded,
        isArrivalDelayLoaded: state.isArrivalDelayLoaded,
    };
    return props;
};

export default withRouter(connect(
    mapStateToProps,
)(App));
