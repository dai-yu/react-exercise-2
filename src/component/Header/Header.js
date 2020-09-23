import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import url from '../../assets/购物车.png';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="store">Store</h1>
        <img src={url} alt="购物车"></img>
        <div id="number">{this.props.number}</div>
      </div>
    );
  }
}
Header.propTypes = {
  number: PropTypes.number,
};
