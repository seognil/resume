import { View } from '@react-pdf/renderer';
import React, { FC } from 'react';

export const ContentContainer: FC = ({ children }) => (
  <View style={{ paddingLeft: 30, paddingRight: 30 }}>{children}</View>
);
