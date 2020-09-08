import React from 'react';
import SaleCard from './SaleCard.jsx';
import './styles.css';
import _ from 'lodash';


const response = {
  data: [
    {
      availability: 1,
      rating: 5,
      price: 295,
      salePrice: 237,
      weights: [ 0.3, 1, 2, 5]
    },
    {
      availability: 1,
      rating: 1,
      price: 350,
      salePrice: 209,
      weights: [ 0.3, 1, 2, 5]
    },
    {
      rating: 5,
      price: 99,
      salePrice: 58,
      weights: [ 0.3, 1, 2, 5]
    },
    {
      rating: 0,
      price: 99,
      salePrice: 58,
      weights: [ 0.3, 1, 2, 5]

    }
  ],
};

class Sale extends React.Component {
    render() {
        return (
            <div className="sale">
                <h2 className="title">Скидки</h2>
                <div className="main__cards">
                  {_.map(response.data, item => (
                    <SaleCard
                      price={item.price}
                      salePrice={item.salePrice}
                      rating={item.rating}
                      availability={item.availability}
                      weights={item.weights}
                    />
                  ))}
                </div>
            </div>
        )
    }
}

export default Sale;
