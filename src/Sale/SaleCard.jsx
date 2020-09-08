import React from 'react';
import toSalePercent from '../utils/toSalePercent.js';
import Weights from './weights';

import checkIcon from './images/check-icon.png';
import placeForPhoto from './images/place_for_photo.png';
import placeForPhoto1 from './images/place_for_photo_1.png';
import placeForPhoto2 from './images/place_for_photo_2.png';
import placeForPhoto3 from './images/place_for_photo_3.png';
import roubleSign1 from './images/rouble-sign_1.png';
import roubleSign2 from './images/rouble-sign_2.png';
import roubleSign3 from './images/rouble-sign_3.png';
import starEmpty from './images/star-empty.png';
import starFull from './images/star-full.png';

import './styles.css';

const ratingList = [1, 2, 3, 4, 5];

const priceByWeight = (price, weight = 1) => `${Math.round(price * weight)}`;

class SaleCard extends React.Component {
  state = {
    selectedWeight: null
  };

  componentDidMount() {
    this.handleSelect(this.props.weights[0])
  }

  handleSelect = (selectedWeight) => {
    this.setState({ selectedWeight});
  };
  render() {
    return (
      <div className="sale__card">
        <div className="sale__img">
        {this.props.salePrice ? (
            <div className="value">{toSalePercent(this.props.price, this.props.salePrice)}</div>
            ) : null}
              <img className="title__img" src={placeForPhoto} />

        </div>
          <div className="rating__block">
            <ul className="rating__stars">
            {_.map(ratingList, rate => (
              <li className="rating__img">
                  <img
                    className="rating__index"
                    src={this.props.rating >= rate ? starFull : starEmpty}
                  />
              </li>
            ))}
            </ul>
            {
              this.props.availability ? (
                <div className="Availability">
                  <img src={checkIcon} alt="Availability__icon" />
                  <div className="Availability__index">в наличии</div>
                </div>

              ) : (
                <div className="Availability">
                  <img src={checkIcon} alt="Availability__icon" />
                  <div className="Availability__index">на складе</div>
                </div>
              )
            }
            </div>
        <div className="description">
          <a className="description__link" href="#">Сухой корм Acana Lamb & Okanagan Apple для взрослых собак, с ягнёнком и яблоком</a>
        </div>
        <Weights
          weights={this.props.weights}
          selectedWeight={this.state.selectedWeight}
          onSelect={this.handleSelect}
        />

            <div className="price">
            {this.props.salePrice ? (
              <div className="oldprice">
                  {priceByWeight(this.props.price, this.state.selectedWeight)}
                  <span className="oldprice__number">
                      <img className="oldprice__logo" src={roubleSign2} />
                  </span>
              </div>
            ) : null}
            <div className="newprice">
                {priceByWeight(this.props.salePrice ? this.props.salePrice : this.props.price, this.state.selectedWeight)}
                <span className="newprice__number">
                    <img className="newprice__logo" src={roubleSign1} />
                </span>
            </div>

              <button className="basket">В корзину</button>
            </div>
      </div>




        )
  }
}
export default SaleCard;
