import React from 'react';

import { Utils } from '../utils/utils';

export const StarsDisplay = props => (
  <>
    {
      Utils.range(1, props.count).map(starId => (
        <div key={starId} className="star"></div>
      ))
    }
  </>
);
