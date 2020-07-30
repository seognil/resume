import * as React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const s = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    marginTop: 10,
    marginBottom: 6,
  },
  title: {
    fontFamily: 'Martel',
    fontWeight: 800,
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

export const SectionTitle: React.FC = ({ children }) => (
  <View style={s.container}>
    <View style={s.line} />
    <Text style={s.title}>{children}</Text>
  </View>
);
