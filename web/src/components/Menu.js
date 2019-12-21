import React, { Component } from "react";
import { connect } from 'react-redux';
import * as menuActions from '../actions/MenuActions.js';
import "./Menu.css";

class Menu extends Component {
  toggleMenu = () => {
    if (this.props.isOpen) {
      this.props.closeMenu();
    } else  {
      this.props.openMenu();
    }
  }

  render() {
    return (
      <div 
          className={ this.props.isOpen ? "hamburger-menu open" : "hamburger-menu" } 
          onClick={() => { this.toggleMenu() }}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.menu.isOpen
});

const mapDispatchToProps = dispatch => ({
  openMenu() {
    menuActions.openMenu(dispatch);
  },
  closeMenu() {
    menuActions.closeMenu(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
