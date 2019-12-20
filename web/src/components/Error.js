import React, { Component } from "react";
import { connect } from 'react-redux';
import './Error.css';

class Error extends Component {
  classNames = () => {
    let names = "error";
    if (this.props.showError) {
      names += " show";
    }
    return names;
  }

  render() {
    return (<div className={this.classNames()}>
      <div className="close">X</div>
      <h3>Oh no!</h3>
      It looks like something went wrong. Here's some details...
      <div className="details">
        {this.props.errorMessage}
      </div>
      </div>);
  }
}

const mapStateToProps = state => ({
  showError: state.errorReducer.errorMessage !== undefined,
  errorMessage: state.errorReducer.errorMessage
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);
