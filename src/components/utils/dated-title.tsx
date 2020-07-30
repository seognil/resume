import * as React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const s = StyleSheet.create({
  line: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 12,
    marginBottom: 2,
  },
  title: {
    fontWeight: 600,
  },
  date: {
    fontWeight: 300,
    color: '#999',
    fontSize: 11,
  },
});

export const DatedTitle: React.FC<{
  date?: string;
}> = ({ date, children }) => (
  <View style={s.line}>
    <Text style={s.title}>{children}</Text>
    {date && <Text style={s.date}>{date}</Text>}
  </View>
);
