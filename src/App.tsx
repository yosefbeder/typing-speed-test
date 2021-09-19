import React, { useEffect, useRef, useState } from 'react';
import QuoteContainer from './components/QuoteContainer';
import {
  IoAlarmOutline as TimeIcon,
  IoSpeedometerOutline as SpeedIcon,
  IoLocateOutline as AccuracyIcon,
  IoCloseCircleOutline as ErrorsIcon,
  IoRefreshOutline as RefreshIcon,
} from 'react-icons/io5';
import LoadingCard from './components/Loading';
import ErrorCard from './components/Error';
import { IconType } from 'react-icons';
import useAppState from './store';
import { refresh, Status } from './store/reducer';
import Actions from './store/actions';

interface Stats {
  icon: IconType;
  value: number;
  mark: string;
}

function App() {
  const [state, dispatch] = useAppState();
  const [timeUpdater, setTimeUpdater] = useState<NodeJS.Timer | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  // calculate stats
  let stats: Stats[];

  if (state.status === Status.ready || state.status === Status.finished) {
    const speed = Math.round(state.typed.trim().length / 5 / (state.time / 60));
    const accuracy =
      Math.round(
        100 -
          (state.errors / (state.typed.trim().length - state.errors || 1)) *
            100,
      ) || 0;

    stats = [
      {
        icon: SpeedIcon,
        value: (isFinite(speed) && speed) || 0,
        mark: 'WPM',
      },
      {
        icon: AccuracyIcon,
        value: accuracy,
        mark: '%',
      },
      { icon: TimeIcon, value: Math.round(state.time), mark: 'Sec' },
      { icon: ErrorsIcon, value: state.errors, mark: 'Char' },
    ];
  }

  // start
  useEffect(() => {
    refresh(dispatch);
  }, []);

  // start timer
  useEffect(() => {
    if (state.typed && !timeUpdater) {
      setTimeUpdater(setInterval(() => dispatch({ type: Actions.tick }), 100));
    }
  }, [state.typed]);

  // stop timer
  useEffect(() => {
    if (state.status === Status.finished && timeUpdater) {
      clearInterval(timeUpdater);
      setTimeUpdater(null);
    }
  }, [state.status]);

  // add an event lisetner on the return button to refresh
  useEffect(() => {
    const buttonEl = buttonRef.current!;

    const refreshHanlder = (e: KeyboardEvent) => {
      if (e.keyCode === 13) buttonEl.click();
    };

    document.addEventListener('keydown', refreshHanlder);

    return () => {
      document.removeEventListener('keydown', refreshHanlder);
    };
  }, []);

  // textarea auto focus
  useEffect(() => {
    const textareaEl = textareaRef.current!;

    if (state.quote) textareaEl.focus();
  }, [state.quote]);

  // button auto focus
  useEffect(() => {
    const buttonEl = buttonRef.current!;

    if (state.status === Status.finished) buttonEl.focus();
  }, [state.status]);

  // updating is typing state
  useEffect(() => {
    if (state.typed !== null) {
      setIsTyping(true);

      const timeout = setTimeout(() => setIsTyping(false), 500);

      return () => clearTimeout(timeout);
    }
  }, [state.typed]);

  return (
    <div className="w-full max-w-screen-sm space-y-4 p-4 mx-auto mt-6">
      <main className="w-full rounded-md rounded-b-none border-b border-blue-500 bg-blue-50">
        {(state.status === Status.ready ||
          state.status === Status.finished) && (
          <QuoteContainer
            quote={state.quote}
            typed={state.typed}
            isTyping={isTyping}
          />
        )}
        {state.status === Status.loading && <LoadingCard />}
        {state.status === Status.error && <ErrorCard />}
      </main>

      {(state.status === Status.ready || state.status === Status.finished) && (
        <div className="flex space-x-4 w-max mx-auto">
          {stats!.map(({ icon: Icon, value, mark }, index) => (
            <div
              key={index}
              className="flex space-x-1 items-center text-gray-700"
            >
              <Icon size={30} />
              <span className="text-md font-semibold">
                {value} {mark}
              </span>
            </div>
          ))}
        </div>
      )}

      <button
        className="btn w-max mx-auto"
        disabled={
          state.status === Status.loading ||
          Boolean(state.status === Status.ready && state.typed)
        }
        onClick={() => {
          refresh(dispatch);
        }}
        ref={buttonRef}
      >
        <RefreshIcon size={24} />
        <span>Refresh</span>
      </button>

      <textarea
        id="input"
        className="w-full rounded-md rounded-t-none border-t border-gray-400 bg-blue-50 resize-none h-40 text-gray-700 p-2 focus:outline-none
      hover:border-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:border-gray-500 disabled:cursor-not-allowed"
        disabled={state.status !== Status.ready}
        value={
          state.status === Status.ready || state.status === Status.finished
            ? state.typed
            : ''
        }
        onChange={e => {
          if (state.status === Status.ready) {
            const value = e.target.value;

            if (
              value.length > state.typed.length &&
              value[value.length - 1] !== state.quote[value.length - 1]
            ) {
              dispatch({ type: Actions.commit });
            }

            dispatch({
              type: Actions.type,
              payload: value,
            });

            if (value.length === state.quote.length)
              dispatch({ type: Actions.finish });
          }
        }}
        ref={textareaRef}
      ></textarea>
    </div>
  );
}

export default App;
