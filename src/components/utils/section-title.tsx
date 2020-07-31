import * as React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { MyState, useMyState } from '#/utils/make-store';

const createStyle = (s: MyState) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      marginTop: 10,
      marginBottom: 6,
    },
    title: {
      fontFamily: s.fancy,
      fontWeight: s.heavy,
      fontSize: 14,
      backgroundColor: 'white',
      paddingRight: 10,
    },
    line: {
      flexGrow: 1,
      borderTop: 0.5,
      borderColor: '#aaa',
      position: 'absolute',
      width: '100%',
      top: '50%',
    },
  });

export const SectionTitle: React.FC = ({ children }) => {
  const s = createStyle(useMyState());
  return (
    <View style={s.container}>
      <View style={s.line} />
      <Text style={s.title}>{children}</Text>
    </View>
  );
};
