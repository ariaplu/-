import React from 'react';
import { JSX } from 'react/jsx-runtime';
import { ReactSVG } from 'react-svg';
import ariaplus from './assets/ariaplus.svg';

const AriaplusImage: React.FC = () => {
  return (
    <ReactSVG src={ariaplus} />
  );
};

export default AriaplusImage;
