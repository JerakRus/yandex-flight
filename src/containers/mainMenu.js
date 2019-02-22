import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import MainMenu from '../components/MainMenu';
import { setSearchQuery } from "../actions";


const mapStateToProps = state => {
    const props = {
        searchQuery: state.searchQuery,
    };
    return props;
};

const actions = {
    setSearchQuery,
};

export default withRouter(connect(
    mapStateToProps,
    actions,
)(MainMenu));

