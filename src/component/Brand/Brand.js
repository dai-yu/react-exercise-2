import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './Brand.scss';
import url from '../../assets/product_image_placeholder.png';

export default class Brand extends React.Component {
  add = (num) => {
    ReactDOM.render(num + 1, document.getElementById('number'));
  };
  render() {
    return (
      <div id="brand">
        {this.props.list.map((item) => (
          <div key={item.name} className="oneProduction">
            <p>{item.name}</p>
            <img src={url} alt={item.name}></img>
            <span>{item.price}</span>
            <button onClick={this.props.add}>add to cart</button>
          </div>
        ))}
      </div>
    );
  }
}

Brand.propTypes = {
  list: PropTypes.array,
  add: PropTypes.func,
};
