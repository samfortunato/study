import React from 'react';
import { useState } from 'react';

import { Button } from './button';
import { Display } from './display';

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (incrementAmt) => setCounter(counter + incrementAmt);

  return (
    <>
      <Button onClickFunction={incrementCounter} incrementAmt={5} />
      <Button onClickFunction={incrementCounter} incrementAmt={10} />
      <Button onClickFunction={incrementCounter} incrementAmt={100} />
      <Button onClickFunction={incrementCounter} incrementAmt={1} />

      <Display message={counter} />
    </>
  );
}

export default App;
