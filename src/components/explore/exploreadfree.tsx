import React from 'react';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AdFreeComponent: React.FC<Props> = ({ onClick }) => {
  return (
    <div className='ad-free-container'>
      <h1 className='title'>Go ad free</h1>
      <p className='description'>
        Enjoy ad-free For You and Following timelines with Premium+
      </p>
      <button className='button' onClick={onClick}>
        Subscribe
      </button>
    </div>
  );
};

export default AdFreeComponent;
