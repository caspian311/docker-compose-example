import React, { Component } from "react";
import { connect } from 'react-redux';
import Menu from './Menu.js';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">Experiments</h1>
        <Menu />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
