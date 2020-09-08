import React from 'react';
import TinySlider from "tiny-slider-react";

import kitten from './images/kitten.png';
import grandorfPack from './images/grandorf-pack.png';

import './banner.scss';

class Banner extends React.Component {
  render() {
    const settings = {
      mouseDrag: true,
      nav: false
    };

    return (
      <div className="baner">
        <TinySlider settings={settings}>
          {_.map([1, 2, 3], () => (
            <div>
              <div className="container">
                <img className="kitten_image" src={kitten}/>
                <div className="text">
                  <p className="title">
                    Здоровое питание для кошек
                  </p>
                  <p className="p">
                    Все ли вы знаете о
                    <br/>
                    потребностях своей кошки?
                  </p>
                  <form>
                    <button className="left_button">
                      Подобрать корм
                    </button>
                  </form>
                </div>
                <div className="right_baner">
                  <div className="background_top_image">
                    <img className="top_image" src={grandorfPack}/>
                  </div>
                  <div className="bottom_image">
                    <div className="top_text">
                      <div className="top_left_text">
                        -20%
                      </div>
                      <div className="top_right_text">
                        на корм для
                        <br/>
                        кошек
                      </div>
                    </div>
                    <div className="bottom_text">
                      <div className="bottom_left_text">
                        в ассортименте
                        <br/>
                        400г, 700г, 800г
                      </div>
                      <form>
                        <button className="bottom_right_button">
                          В корзину
                        </button>
                      </form>
                      <div className="arrow">
                        <button className="arrow_left">
                          <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.83299 16.1496L9.87307 15.0965L3.6917 8.64454L4.35016 7.95647L4.34717 7.96022L9.8394 2.22855L8.81503 1.15897L1.64221 8.64454L8.83299 16.1496Z" fill="#68D6F4"/>
                            <path d="M8.83299 16.1496L9.87307 15.0965L3.6917 8.64454L4.35016 7.95647L4.34717 7.96022L9.8394 2.22855L8.81503 1.15897L1.64221 8.64454L8.83299 16.1496" stroke="#68D6F4"/>
                          </svg>
                        </button>
                        <button className="arrow_right">
                          <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.81533 16.1496L0.775245 15.0965L6.95662 8.64454L6.29815 7.95647L6.30114 7.96022L0.808917 2.22855L1.83328 1.15897L9.0061 8.64454L1.81533 16.1496Z" fill="#68D6F4"/>
                            <path d="M1.81533 16.1496L0.775245 15.0965L6.95662 8.64454L6.29815 7.95647L6.30114 7.96022L0.808917 2.22855L1.83328 1.15897L9.0061 8.64454L1.81533 16.1496" stroke="#68D6F4"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TinySlider>
      </div>
    );
  }
}

export default Banner;
