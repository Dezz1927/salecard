import * as React from 'react';
import toSalePercent from '../utils/toSalePercent.js';

import checkEmpty from './images/check-empty.png';
import checkIcon from './images/check-icon.png';
import placeForPhoto from './images/place-for-photo.png';
import printIconBlue from './images/print-icon-blue.png';
import roubleSignD from './images/rouble-sign-d.png';
import roubleSignPromo from './images/rouble-sign-promo.png';
import roubleSign from './images/rouble-sign.png';
import starEmpty from './images/star-empty.png';
import starFull from './images/star-full.png';

const ratingList = [1, 2, 3, 4, 5];

class ProductCard extends React.Component {
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
              <ul className="content-weight">
                  <li className="content-weight-dose">
                      <img className="content-weight-dose-icon" src={checkEmpty} />
                      <div className="content-weight-dose-value">300 гр</div>
                  </li>
                  <li className="content-weight-dose">
                      <img className="content-weight-dose-icon" src={checkEmpty} />
                      <div className="content-weight-dose-value">1 кг</div>
                  </li>
                  <li className="content-weight-dose">
                      <img className="content-weight-dose-icon" src={checkEmpty} />
                      <div className="content-weight-dose-value">2 кг</div>
                  </li>
                  <li className="content-weight-dose">
                      <img className="content-weight-dose-icon content-weight-dose-icon-active" src={printIconBlue} />
                      <div className="content-weight-dose-value">5 кг</div>
                  </li>
              </ul>
              <div className="item-total">
                  {this.props.salePrice ? (
                    <div className="total-cost-discount">
                        {this.props.price}
                        <span className="total-cost-currensy-discount">
                            <img className="total-cost-currense-discount-ru" src={roubleSignD} />
                        </span>
                    </div>
                  ) : null}
                  <div className="total-cost total-cost-promo">
                      {this.props.salePrice ? this.props.salePrice : this.props.price}
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
