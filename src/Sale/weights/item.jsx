import * as React from 'react';

import checked from './../images/print-icon-blue.png';
import empty from './../images/print-icon-empty.png';

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
    <li className="weight-table" onClick={handleSelect}>
      <img
        className="weight-table-icon"
        src={active ? checked : empty}
      />
      <div className="weight-table-icon-value">{weight} кг</div>
    </li>
  );
}

export default WeightItem;
