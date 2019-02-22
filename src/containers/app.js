import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import App from '../components/App';


const mapStateToProps = state => {
    const props ={
        isDepartureLoaded: state.isDepartureLoaded,
        isArrivalLoaded: state.isArrivalLoaded,
    };
    return props;
};

export default withRouter(connect(
    mapStateToProps,
)(App));
