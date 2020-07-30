import * as React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const s = StyleSheet.create({
  line: {
    lineHeight: 1.3,
  },
  deco: {
    fontWeight: 600,
  },
  item: {
    fontSize: 9,
  },
});

export const ListItem: React.FC = ({ children }) => (
  <Text style={s.line}>
    <Text style={s.deco}>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
    <Text style={s.item}>{children}</Text>
  </Text>
);
