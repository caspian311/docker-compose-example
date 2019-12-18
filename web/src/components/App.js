import React, { Component } from "react";
import { connect } from 'react-redux';
import * as AppActions from '../actions/AppActions';

class App extends Component {
  componentDidMount() {
    this.props.loadMessage();
  }

  errorShown() {
    return (
      <div>An error ocurred - please come back later</div>
    );
  }

  main() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <div>
          { this.props.isAppLoading ? 'Loading...' : this.props.message }
        </div>
      </div>);
  }

  render() {
    return (
      <div>
        { this.props.error ? this.errorShown() : this.main() }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isAppLoading: state.appReducer.loading,
  message: state.appReducer.message,
  error: state.appReducer.error
});

const mapDispatchToProps = dispatch => ({
  loadMessage() {
    AppActions.loadMessage(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

