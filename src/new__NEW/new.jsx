import React from 'react';
import ProductCard from './ProductCard';
import _ from 'lodash';

import './styles.scss';

const response = {
  data: [
    {
      rating: 1,
      price: 9999,
      salePrice: 9500
    },
    {
      rating: 2,
      price: 99999,
      salePrice: 7000
    },
    {
      rating: 3,
      price: 99998,
      salePrice: 6000
    },
    // {
    //   rating: 3,
    //   price: 99997
    // },
    {
      rating: 4,
      price: 99996,
      salePrice: 8000
    },
    {
      rating: 5,
      price: 99995,
      weights: [0.3, 1, 2, 5]
    }
  ],
  headers: {}
};

class New extends React.Component {
    render() {
        return (
            <div className="new">
                <h2 className="new-title">НОВИНКИ</h2>
                <div className="new-box">
                  {_.map(response.data, item => (
                    <ProductCard
                      price={item.price}
                      salePrice={item.salePrice}
                      rating={item.rating}
                      weights={item.weights}
                    />
                  ))}
                </div>
            </div>
        )
    }
}

export default New;
