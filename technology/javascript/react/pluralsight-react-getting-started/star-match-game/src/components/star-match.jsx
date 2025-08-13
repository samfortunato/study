import React, { useState } from 'react';

import { Game } from './game';

export const StarMatch = () => {
  const [gameId, setGameId] = useState(0);

  const startNewGame = () => setGameId(gameId + 1);

  return <Game key={gameId} startNewGame={startNewGame} />
};
