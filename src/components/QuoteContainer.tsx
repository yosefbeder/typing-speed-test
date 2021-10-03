import React from 'react';
import { AnimateSharedLayout, motion, useCycle } from 'framer-motion';

interface QuoteContainerProps {
  quote: string;
  typed: string;
  isTyping: boolean;
}

const variants: any = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const QuoteContainer: React.FC<QuoteContainerProps> = ({
  quote,
  typed,
  isTyping,
}) => {
  const [animation, cycle] = useCycle('visible', 'hidden');

  return (
    <AnimateSharedLayout>
      <p className="text-gray-400 p-2 select-none">
        <span className="text-gray-700 select-text">
          {quote
            .slice(0, typed.length)
            .split('')
            .map((l, i) =>
              l === typed[i] ? (
                l
              ) : (
                <span
                  key={i}
                  className="text-red-500 border-b-2 border-red-500"
                >
                  {l}
                </span>
              ),
            )}
        </span>
        <span className="relative">
          {quote[typed.length]}
          <motion.div
            layoutId="caret"
            variants={variants}
            initial="hidden"
            transition={{
              opacity: { type: 'spring' },
              default: { type: 'tween', duration: 0.15, ease: 'easeOut' },
            }}
            animate={isTyping ? 'visible' : animation}
            onAnimationComplete={() => cycle()}
            className="absolute left-0 top-0 h-full w-0.5 bg-blue-400"
          ></motion.div>
        </span>
        {quote.slice(typed.length + 1)}
      </p>
    </AnimateSharedLayout>
  );
};

export default QuoteContainer;
