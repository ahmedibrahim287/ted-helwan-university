
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation, Footer, Home, Attend, Watch, Teleportation, Tangram, Legacy, About, Sponsers, Contactus, Conductor, Notavailable, Agenda } from "./components/index";
import ScrollToTop from "./components/ScrollToTop";
import $ from 'jquery';


class App extends React.Component {

  componentDidMount() {
    $(document).ready(function () {
      $(".nav #BBA").click(function () {
        $("#bs-example-navbar-collapse-1").removeClass("show");
      });
    });
  };


  render() {
    return (
      <div className="App">
        <Router >
          <Navigation />
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/Home" exact component={() => <Home />} />
            <Route path="/Attend" exact component={() => <Attend />} />
            <Route path="/Watch" exact component={() => <Watch />} />
            <Route path="/Conductor" exact component={() => <Conductor />} />
            <Route path="/Tangram" exact component={() => <Tangram />} />
            <Route path="/Teleportation" exact component={() => <Teleportation />} />
            <Route path="/Legacy" exact component={() => <Legacy />} />
            <Route path="/About" exact component={() => <About />} />
            <Route path="/Sponsers" exact component={() => <Sponsers />} />
            <Route path="/Contactus" exact component={() => <Contactus />} />
            <Route path="/Notavailable" exact component={() => <Notavailable />} />
            <Route path="/Agenda" exact component={() => <Agenda />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
