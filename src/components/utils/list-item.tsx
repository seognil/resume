import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import { useMyState, MyState } from '#/utils/make-store';

const createStyle = (s: MyState) =>
  StyleSheet.create({
    line: {
      lineHeight: 1.3,
    },
    deco: {
      fontWeight: s.bold,
    },
    item: {
      fontSize: s.size,
    },
  });

export const ListItem: React.FC = ({ children }) => {
  const s = createStyle(useMyState());
  return (
    <Text style={s.line}>
      <Text style={s.deco}>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
      <Text style={s.item}>{children}</Text>
    </Text>
  );
};
