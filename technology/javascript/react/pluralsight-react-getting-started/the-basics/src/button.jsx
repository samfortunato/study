import React from 'react';

export function Button(props) {
  const handleClick = () => props.onClickFunction(props.incrementAmt);

  return (
    <button onClick={handleClick}>
      {props.incrementAmt}
    </button>
  );
}
