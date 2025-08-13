import React from 'react';

import { GameStates } from '../constants/game-states';

export const PlayAgainButton = props => {
  const hasWon = props.gameState === GameStates.Won;

  return <div className="game-done">
    <div className="message" style={{ color: hasWon ? 'green' : 'red' }}>
      {hasWon ? 'You Won!' : 'You Lost!'}
    </div>
    <button type="button" onClick={props.onClick}>Play Again</button>
  </div>
};
