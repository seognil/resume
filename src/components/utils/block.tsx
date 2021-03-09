import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';

const s = StyleSheet.create({
  block: {
    marginBottom: 10,
  },
});

export const Block: React.FC = ({ children }) => (
  <View style={s.block}>{children}</View>
);
