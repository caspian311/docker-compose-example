import React, { Component } from "react";
import { connect } from 'react-redux';
import * as AppActions from '../actions/AppActions';
import './App.css';
import Header from './Header';
import Error from './Error';

class App extends Component {
  componentDidMount() {
    this.props.loadMessage();
  }

  render() {
    return (
      <div>
        <Error />
        <Header />
        <div>
          { this.props.isAppLoading ? 'Loading...' : this.props.message }
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isAppLoading: state.app.loading,
  message: state.app.message,
});

const mapDispatchToProps = dispatch => ({
  loadMessage() {
    AppActions.loadMessage(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

