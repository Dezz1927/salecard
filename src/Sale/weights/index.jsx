import React from 'react';
import Weight from './item.jsx';

const Weights = ({
  weights,
  selectedWeight,
  onSelect: handleSelect
}) => _.size(weights) > 0 ? (
  <ul className="weight">
      {_.map(weights, (weight, index) => (
        <Weight
          key={`Weight-${index}`}
          active={weight === selectedWeight}
          weight={weight}
          onSelect={handleSelect}
        />
      ))}
  </ul>
) : null;

export default Weights;
