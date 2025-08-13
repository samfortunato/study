import React from 'react';

import { Card } from './card';

export const CardList = (props) => {
  const cards = props.profiles.map((profile, idx) => (
    <Card {...profile} key={`${profile.id}-${idx}`} />
  ));

  return (
    <div>{cards}</div>
  );
};
