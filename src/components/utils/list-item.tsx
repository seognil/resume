import { Creator, useCreateStyles } from '#/utils/common-styles';
import { Text } from '@react-pdf/renderer';
import React from 'react';

const creator: Creator = (s) => ({
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
  const s = useCreateStyles(creator);
  return (
    <Text style={s.line}>
      <Text style={s.deco}>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
      <Text style={s.item}>{children}</Text>
    </Text>
  );
};
