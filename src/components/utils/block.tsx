import { View } from '@react-pdf/renderer';
import React, { FC } from 'react';

export const Block: FC = ({ children }) => (
  <View style={{ marginBottom: 10 }}>{children}</View>
);
