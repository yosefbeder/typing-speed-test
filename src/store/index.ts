import { useReducer } from 'react';
import reducer, { initialState } from './reducer';

const useAppState = () => {
  return useReducer(reducer, initialState);
};

export default useAppState;
