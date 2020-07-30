import * as React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';

const s = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export const ContentContainer: React.FC = ({ children }) => (
  <View style={s.container}>{children}</View>
);
