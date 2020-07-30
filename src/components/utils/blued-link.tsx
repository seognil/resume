import * as React from 'react';
import { Link } from '@react-pdf/renderer';

export const BluedLink: React.FC<{ src: string }> = ({ children, src }) => (
  <Link src={src} style={{ color: '#2c6ae8' }}>
    {children}
  </Link>
);
