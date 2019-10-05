import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Buttons";
class Nav extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <Link className='nav-link' to='/GetQuotes'>
          <Button value='Get Quote' className='btn btn-primary btn-lg' />
        </Link>
        <Link className='nav-link' to='/SearchQuotes'>
          <Button value='Search Quotes' className='btn btn-primary btn-lg' />
        </Link>
      </div>
    );
  }
}

export default Nav;
