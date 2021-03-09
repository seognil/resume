import { Creator, useCreateStyles } from '#/utils/common-styles';
import { Text, View } from '@react-pdf/renderer';
import React from 'react';

const creator: Creator = (s) => ({
  flex: {
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
  const s = useCreateStyles(creator);

  return (
    <View style={s.flex}>
      <Text style={s.title}>{children}</Text>
      {date && <Text style={s.date}>{date}</Text>}
    </View>
  );
};
