import React, { Component } from "react";
import { HashRouter, Route} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Pages/Home";
import Projects from './components/Pages/Projects';
import Resume from './components/Pages/Resume';
import Contact from './components/Pages/Contact';

export default class App extends Component {

  render () {
    return(
      <HashRouter basename="/">
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    )
    }
  }
