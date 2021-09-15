import React from 'react';

interface QuoteContainerProps {
  quote: string;
  typed: string;
  isTyping: boolean;
}

const QuoteContainer: React.FC<QuoteContainerProps> = ({
  quote,
  typed,
  isTyping,
}) => {
  return (
    <p className="text-gray-400 p-2 select-none">
      <span className="text-gray-700 select-text">
        {quote
          .slice(0, typed.length)
          .split('')
          .map((l, i) =>
            l === typed[i] ? (
              l
            ) : (
              <span key={i} className="text-red-500 border-b-2 border-red-500">
                {l}
              </span>
            ),
          )}
      </span>
      <span
        className={`text-blue-500 border-b-2 border-blue-500 ${
          isTyping ? 'animate-none' : 'animate-pulse'
        }`}
      >
        {quote[typed.length]}
      </span>
      {quote.slice(typed.length + 1)}
    </p>
  );
};

export default QuoteContainer;
