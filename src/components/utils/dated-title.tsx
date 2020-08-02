import * as React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { useMyState, MyState } from '#/utils/make-store';

const createStyle = (s: MyState) =>
  StyleSheet.create({
    line: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: s.size! + 2,
      marginBottom: 2,
    },
    title: {
      fontWeight: s.bold,
    },
    date: {
      color: '#999',
      fontSize: s.size! + 1,
    },
  });

export const DatedTitle: React.FC<{
  date?: string;
}> = ({ date, children }) => {
  const s = createStyle(useMyState());
  return (
    <View style={s.line}>
      <Text style={s.title}>{children}</Text>
      {date && <Text style={s.date}>{date}</Text>}
    </View>
  );
};
