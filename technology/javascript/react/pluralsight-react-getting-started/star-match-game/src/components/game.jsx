import React from 'react';

import { PlayAgainButton } from './play-again-button';
import { StarsDisplay } from './stars-display';
import { NumberButton } from './number-button';

import { useGameState } from '../hooks/use-game-state';

import { Utils } from '../utils/utils';

import { NumberStates } from '../constants/number-states';
import { GameStates } from '../constants/game-states';

export const Game = (props) => {
  const {
    candidateNums,
    starAmount,
    availableNums,
    secondsLeft,
    setGameState
  } = useGameState();

  const areCandidatesWrong = Utils.sum(candidateNums) > starAmount;

  const getGameState = () => {
    if (availableNums.length === 0) return GameStates.Won;
    if (secondsLeft === 0) return GameStates.Lost;

    return GameStates.Playing;
  }

  const gameState = getGameState();

  const getNumberStatus = num => {
    let isUsed;

    if (!availableNums.includes(num)) isUsed = NumberStates.Used;
    if (candidateNums.includes(num)) isUsed = (areCandidatesWrong ? NumberStates.Wrong : NumberStates.Candidate);

    return isUsed || NumberStates.Available;
  };

  const onNumberClick = (num, numberStatus) => {
    if (numberStatus !== NumberStates.Used && gameState === GameStates.Playing) {
      const newCandidateNums = (numberStatus === NumberStates.Available) ?
        candidateNums.concat(num) :
        candidateNums.filter(candidateNum => candidateNum !== num);

      setGameState(newCandidateNums);
    }
  };

  const numberButtons = Utils.range(1, 9).map(num => (
    <NumberButton
      number={num}
      status={getNumberStatus(num)}
      key={num}
      onClick={onNumberClick}
    />
  ));

  return (
    <div className="game">
      <div className="help">Pick 1 or more numbers that sum to the number of stars</div>

      <div className="body">
        <div className="left">
          {
            gameState !== GameStates.Playing ?
              <PlayAgainButton onClick={props.startNewGame} gameState={gameState} /> :
              <StarsDisplay count={starAmount} />
          }
        </div>
        <div className="right">{numberButtons}</div>
      </div>

      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};
