import { getNewQuote } from '../api/quotes';
import Actions from './actions';

export enum Status {
  loading,
  error,
  ready,
  finished,
}

interface EmptyStateType {
  status: Status.loading | Status.error;
  quote: null;
  typed: null;
  errors: 0;
  time: 0;
  curErrors: 0;
}

interface FilledStateType {
  status: Status.ready | Status.finished;
  quote: string;
  typed: string;
  errors: number;
  time: number;
  curErrors: number;
}
type StateType = EmptyStateType | FilledStateType;

type ActionType =
  | { type: Actions.start }
  | { type: Actions.fail }
  | { type: Actions.success; payload: string }
  | { type: Actions.finish }
  | { type: Actions.type; payload: { curErrors: number; typed: string } }
  | { type: Actions.tick }
  | { type: Actions.commit };

export const initialState: StateType = {
  status: Status.loading,
  quote: null,
  typed: null,
  errors: 0,
  time: 0,
  curErrors: 0,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  if (action.type === Actions.start)
    return {
      status: Status.loading,
      quote: null,
      typed: null,
      errors: 0,
      time: 0,
      curErrors: 0,
    };

  if (action.type === Actions.fail)
    return {
      status: Status.error,
      quote: null,
      typed: null,
      errors: 0,
      time: 0,
      curErrors: 0,
    };

  if (action.type === Actions.success)
    return {
      status: Status.ready,
      quote: action.payload,
      typed: '',
      errors: 0,
      time: 0,
      curErrors: 0,
    };

  if (action.type === Actions.finish)
    return {
      status: Status.finished,
      quote: state.quote as string,
      typed: state.typed as string,
      errors: state.errors,
      time: state.time,
      curErrors: state.curErrors,
    };

  if (action.type === Actions.type)
    return {
      status: Status.ready,
      quote: state.quote as string,
      typed: action.payload.typed,
      errors: state.errors,
      time: state.time,
      curErrors: action.payload.curErrors,
    };

  if (action.type === Actions.commit)
    return {
      status: Status.ready,
      quote: state.quote as string,
      typed: state.typed as string,
      errors: state.errors + 1,
      time: state.time,
      curErrors: state.curErrors,
    };

  if (action.type === Actions.tick)
    return {
      status: Status.ready,
      quote: state.quote as string,
      typed: state.typed as string,
      errors: state.errors,
      time: state.time + 0.1,
      curErrors: state.curErrors,
    };

  return state;
};

export const refresh = async (dispatch: React.Dispatch<ActionType>) => {
  dispatch({ type: Actions.start });

  try {
    const quote = await getNewQuote();

    dispatch({ type: Actions.success, payload: quote });
  } catch (err) {
    dispatch({ type: Actions.fail });
  }
};

export default reducer;
