import { View } from '@react-pdf/renderer';
import React from 'react';

export const Block: React.FC = ({ children }) => (
  <View style={{ marginBottom: 10 }}>{children}</View>
);
