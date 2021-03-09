import { View } from '@react-pdf/renderer';
import React from 'react';

export const ContentContainer: React.FC = ({ children }) => (
  <View style={{ paddingLeft: 30, paddingRight: 30 }}>{children}</View>
);
