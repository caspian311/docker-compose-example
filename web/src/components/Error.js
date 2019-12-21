import React, { Component } from "react";
import { connect } from 'react-redux';
import './Error.css';
import * as errorActions from "../actions/ErrorActions";

class Error extends Component {
  classNames = () => {
    let names = "error";
    if (this.props.showError) {
      names += " show";
    }
    return names;
  }

  dismiss = () => {
    this.props.dismiss();
  }

  render() {
    return (<div className={this.classNames()}>
      <div className="close" onClick={() => this.dismiss() }>X</div>
      <h3>Oh no!</h3>
      It looks like something went wrong. Here's some details...
      <div className="details">
        {this.props.errorMessage}
      </div>
      </div>);
  }
}

const mapStateToProps = state => ({
  showError: state.error.errorMessage !== undefined,
  errorMessage: state.error.errorMessage
});

const mapDispatchToProps = dispatch => ({
  dismiss() {
    errorActions.dismissError(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);
