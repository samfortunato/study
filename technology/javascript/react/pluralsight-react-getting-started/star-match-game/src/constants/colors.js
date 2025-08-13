import { NumberStates } from './number-states';

export const Colors = {
  [NumberStates.Available]: 'lightgray',
  [NumberStates.Used]: 'lightgreen',
  [NumberStates.Wrong]: 'lightcoral',
  [NumberStates.Candidate]: 'deepskyblue',
};
