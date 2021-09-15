import React from 'react';
import UnsureEmoji from '../icons/UnsureEmoji';

const Loading = () => {
  return (
    <div className="flex flex-col items-center w-max m-auto ">
      <UnsureEmoji />
      <h2 className="mb-2">Loading...</h2>
    </div>
  );
};

export default Loading;
