import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: '#BADEF6' }}
      >
        <a href="" className="mx-auto">
          <img src="./images/logo.png" height="100" width="100" />
        </a>
      </div>
    );
  }
}

export default Header;
