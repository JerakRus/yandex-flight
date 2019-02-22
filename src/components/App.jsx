import React from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';

import Logo from './Logo';
import Home from './Home';
import Footer from './Footer';
import Loader from './Loader';
import MainMenuContainer from '../containers/mainMenu';
import ArrivalContainer from '../containers/arrival';
import DepartureContainer from '../containers/departure';
import FlightContainer from '../containers/flight';


export default class App extends React.Component {
    render() {
        const { isArrivalLoaded, isDepartureLoaded } = this.props;

        return (
          <Container>
              <Logo />
              <MainMenuContainer />
              <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/arrival' exact component={isArrivalLoaded === 'success' ? ArrivalContainer : Loader} />
                  <Route path='/departure' exact component={isDepartureLoaded === 'success' ? DepartureContainer : Loader} />
                  <Route path='/:event/:uid'
                         component={isArrivalLoaded === 'success' && isDepartureLoaded === 'success' ? FlightContainer : Loader} />
              </Switch>
              <Footer />
          </Container>
        );
    }
}

