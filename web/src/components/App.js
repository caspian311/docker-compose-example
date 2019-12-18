import React, { Component } from "react";
import { connect } from 'react-redux';
import * as AppActions from '../actions/AppActions';

class App extends Component {
  componentWillMount() {
    this.props.loadMessage();
  }

  render() {
    return (<div>
      <h1>Hello, world!</h1>
      <div>
        { this.props.isAppLoading ? 'Loading...' : this.props.message }
      </div>
    </div>);
  }
}


const mapStateToProps = state => ({
  isAppLoading: state.appReducer.loading,
  message: state.appReducer.message
});

const mapDispatchToProps = dispatch => ({
  loadMessage() {
    AppActions.loadMessage(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

