import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
import Quiz from '../../components/Quiz';
import Summary from '../../components/Summary';
import Footer from '../../components/Footer';

const Routes = () => {
  return (
    <div className="routes">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          <Route exact path="/summary">
            <Summary />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
