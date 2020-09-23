import React from 'react';
import PropTypes from 'prop-types';
import Brand from '../Brand/Brand';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: ['IPhone', 'HUAWEI'],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          products: result,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.products &&
          this.state.products
            .filter((item, index) => index === 0 || index === 3)
            .map((product) => (
              <div key={product.name}>
                <h2>{product.category}</h2>
                <Brand
                  list={this.state.products.filter(
                    (item) => item.category === product.category
                  )}
                  add={this.props.add}
                ></Brand>
              </div>
            ))}
      </div>
    );
  }
}
Products.propTypes = {
  add: PropTypes.func,
};
