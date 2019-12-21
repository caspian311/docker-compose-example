import React, { Component } from "react";
import { connect } from 'react-redux';
import './App.css';
import Header from './Header';
import SideNav from './SideNav';
import Error from './Error';
import Characters from './Characters';

class App extends Component {
  render() {
    return (
      <div>
        <Error />
        <Header />
        <SideNav />
        <Characters />
      </div>
    );
  }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
