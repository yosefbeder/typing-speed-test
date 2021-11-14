import React, { useEffect, useRef, useState } from 'react';
import useInterval from '../hooks/useInterval';

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
	const [caretPos, setCaretPos] = useState({ x: 8, y: 10.5 });
	const curCharacterRef = useRef<HTMLSpanElement>(null);
	const containerRef = useRef<HTMLParagraphElement>(null);
	const [opacity, setOpacity] = useState(0);

	useEffect(() => {
		const containerPos = containerRef.current!.getBoundingClientRect();
		const curCharacterPos = curCharacterRef.current!.getBoundingClientRect();

		setCaretPos({
			x: curCharacterPos.x - containerPos.x,
			y: curCharacterPos.y - containerPos.y,
		});
	}, [typed]);

	useInterval(() => {
		if (isTyping) {
			setOpacity(1);
		} else {
			setOpacity(prev => (prev === 1 ? 0 : 1));
		}
	}, 500);

	return (
		<p ref={containerRef} className="relative text-gray-400 p-2 select-none">
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
			<span ref={curCharacterRef}>{quote[typed.length]}</span>
			<div
				className="caret"
				style={{
					transform: `translate3d(${caretPos.x}px, ${caretPos.y}px, 0)`,
					opacity,
				}}
			/>
			{quote.slice(typed.length + 1)}
		</p>
	);
};

export default QuoteContainer;
