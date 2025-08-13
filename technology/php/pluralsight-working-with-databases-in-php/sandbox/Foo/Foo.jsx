import React from 'react';

import { consec } from './Foo.translations.jsx';

import { StyledSection } from './Foo.styles.jsx';

export function Foo() {
  return (
    <>
      <h1>Foo</h1>
      <h2>Bar</h2>

      <StyledSection>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea in fugiat enim totam, minima culpa similique eaque temporibus nemo soluta rem odio nostrum quibusdam sapiente sunt, quasi aliquid ducimus!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea in fugiat enim totam, minima culpa similique eaque temporibus nemo soluta rem odio nostrum quibusdam sapiente sunt, quasi aliquid ducimus!</p>

        <p>Lorem ipsum dolor sit amet {consec} adipisicing elit. Dolore ea in fugiat enim totam, minima culpa similique eaque temporibus nemo soluta rem odio nostrum quibusdam sapiente sunt, quasi aliquid ducimus!</p>
      </StyledSection>
    </>
  );
}
