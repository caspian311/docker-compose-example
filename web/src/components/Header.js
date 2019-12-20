import React, { Component } from "react";
import { connect } from 'react-redux';
import * as menuActions from '../actions/MenuActions.js';

class Header extends Component {
  toggleMenu = () => {
    if (this.props.isOpen) {
      this.props.closeMenu();
    } else  {
      this.props.openMenu();
    }
  }

  render() {
    return (
      <div className="header">
        <h1 className="title">Experiments</h1>
        <div 
            className={ this.props.isOpen ? "hamburger-menu open" : "hamburger-menu" } 
            onClick={() => { this.toggleMenu() }}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.headerReducer.isOpen
});

const mapDispatchToProps = dispatch => ({
  openMenu() {
    menuActions.openMenu(dispatch);
  },
  closeMenu() {
    menuActions.closeMenu(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
