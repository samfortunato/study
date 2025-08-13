import React from 'react';

import { Colors } from '../constants/colors';

export const NumberButton = props => {
  const styles = {
    backgroundColor: Colors[props.status]
  };

  return (
    <button
      className="number"
      style={styles}
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
};
