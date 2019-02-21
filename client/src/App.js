import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Home from './Components/pages/Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/')
  }

  componentDidMount() {
    this.connecToServer();
  }
  render() {
    return (
      <Router>
      <div className="some-random-class">
         <Navbar />
         <Route exact path="/" component={Home} />
         <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
