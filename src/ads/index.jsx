import React from 'react';
import AdsImage from './ads-image.png';
import AdsImage1 from './ads-image.png';
import AdsImage2 from './ads-image.png';
import AdsImage3 from './ads-image.png';
import AdsImage4 from './ads-image.png';
import AdsImage5 from './ads-image.png';

import './styles.scss';

const data = [
  {
    src: AdsImage,
    alt: 'Alternative 1'
  },
  {
    src: AdsImage1,
    alt: 'Alternative 2'
  },
  {
    src: AdsImage2,
    alt: 'Alternative 3'
  },
  {
    src: AdsImage3,
    alt: 'Alternative 4'
  },
  {
    src: AdsImage4,
    alt: 'Alternative 5'
  },
  {
    src: AdsImage5,
    alt: 'Alternative 6'
  }
];

class Ads extends React.Component {
  render() {
    return (
      <section className="ads">
        {data.map(function (item, index, _data) {
          return (
            <div key={`AdsItem-${index}`}>
              <img src={item.src} alt={item.alt} />
              <span>{item.alt}</span>
            </div>
          );
        })}
      </section>
    )
  }
}

export default Ads;
