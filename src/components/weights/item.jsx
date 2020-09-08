import * as React from 'react';

import checked from './images/checked.png';
import empty from './images/empty.png';

const WeightItem = ({
  active,
  weight,
  onSelect
}) => {
  const handleSelect = React.useCallback(
    () => {
      onSelect(weight)
    },
    [weight, onSelect]
  );

  return (
    <li className="content-weight-dose" onClick={handleSelect}>
      <img
        className="content-weight-dose-icon"
        src={active ? checked : empty}
      />
      <div className="content-weight-dose-value">{weight} кг</div>
    </li>
  );
}

export default WeightItem;
