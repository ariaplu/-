import React from 'react';
import Image from 'next/image';
import ariaplus from './assets/ariaplus.svg';

const AriaplusImage: React.FC = () => {
  return (
    <Image src={ariaplus} />
  );
};

export default AriaplusImage;
