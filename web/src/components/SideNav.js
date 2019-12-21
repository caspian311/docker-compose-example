import React, { Component } from "react";
import { connect } from 'react-redux';
import "./SideNav.css";

class SideNav extends Component {
  render() {
    return (
        <div className={ this.props.isOpen ? "side-nav show" : "side-nav"}>
          <ul>
            <li>Main</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.menu.isOpen
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
