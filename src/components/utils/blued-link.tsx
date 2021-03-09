import { Link } from '@react-pdf/renderer';
import React, { FC } from 'react';

export const BluedLink: FC<{ src: string }> = ({ children, src }) => (
  <Link src={src} style={{ color: '#2c6ae8' }}>
    {children}
  </Link>
);
