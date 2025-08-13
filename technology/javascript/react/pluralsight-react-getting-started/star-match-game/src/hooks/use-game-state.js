import { useState, useEffect } from 'react';

import { Utils } from '../utils/utils';

export const useGameState = () => {
  const [starAmount, setStarAmount] = useState(Utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(Utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const secondsTimerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1)
      }, 1000);

      return () => clearTimeout(secondsTimerId);
    }
  });

  const setGameState = (newCandidateNums) => {
    const doesSumEqualNumberOfStars = Utils.sum(newCandidateNums) === starAmount;

    if (!doesSumEqualNumberOfStars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(availableNum => !newCandidateNums.includes(availableNum));

      setStarAmount(Utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return {
    starAmount,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  };
};
