import * as React from 'react';
import toSalePercent from '../utils/toSalePercent.js';
import Wieghts from './../components/weights';

import checkIcon from './images/check-icon.png';
import placeForPhoto from './images/place-for-photo.png';
import roubleSignD from './images/rouble-sign-d.png';
import roubleSignPromo from './images/rouble-sign-promo.png';
import roubleSign from './images/rouble-sign.png';
import starEmpty from './images/star-empty.png';
import starFull from './images/star-full.png';

const ratingList = [1, 2, 3, 4, 5];

const priceByWeight = (price, weight = 1) => price * weight;

class ProductCard extends React.Component {
  state = {
    selectedWeight: null
  };

  componentDidMount() {
    console.log(this);
    if (_.size(this.props.weights) > 0) {
      this.handleSelect(this.props.weights[0]);
    }
  }

  handleSelect = (selectedWeight) => {
    this.setState({ selectedWeight });
  };

  render() {
    return (
      <div className="new-item">
          <div className="item-icon item-icom-promo">
              {this.props.salePrice ? (
                <div className="promo-value">{toSalePercent(this.props.price, this.props.salePrice)}</div>
              ) : null}
              <img className="item-icon-img" src={placeForPhoto} />
          </div>
          <div className="item-content">
              <div className="content-title">
                  <ul className="content-rating">
                      {_.map(ratingList, rate => (
                        <li className="content-rating-pos">
                            <img
                              className="content-reting-pos-index"
                              src={this.props.rating >= rate ? starFull : starEmpty}
                            />
                        </li>
                      ))}
                  </ul>
                  <div className="status">
                      <img className="status-icon" src={checkIcon} />
                      <div className="status-index">в наличии</div>
                  </div>
              </div>
              <div className="content-description">
                Сухой корм Cat Chow Special Care Sterilized для взрослых кошек, Кастрированные или...
              </div>
              <Wieghts
                weights={this.props.weights}
                selectedWeight={this.state.selectedWeight}
                onSelect={this.handleSelect}
              />
              <div className="item-total">
                  {this.props.salePrice ? (
                    <div className="total-cost-discount">
                        {priceByWeight(this.props.price, this.state.selectedWeight)}
                        <span className="total-cost-currensy-discount">
                            <img className="total-cost-currense-discount-ru" src={roubleSignD} />
                        </span>
                    </div>
                  ) : null}
                  <div className="total-cost total-cost-promo">
                      {priceByWeight(this.props.salePrice ? this.props.salePrice : this.props.price, this.state.selectedWeight)}
                      <span className="total-cost-currensy">
                          <img className="total-cost-currensy-ru" src={roubleSignPromo} />
                      </span>
                  </div>
                  <button className="total-choose total-choose-promo">В корзину</button>
              </div>
          </div>
      </div>
    );
  }
}

export default ProductCard;
