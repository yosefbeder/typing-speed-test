import React from 'react';
import SadEmoji from '../icons/SadEmoji';

const Error = () => {
  return (
    <div className="flex flex-col items-center w-max m-auto ">
      <SadEmoji />
      <h2 className="mb-2">Loading...</h2>
    </div>
  );
};

export default Error;
