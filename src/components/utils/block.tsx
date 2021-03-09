import { useCreateStyles } from '#/utils/common-styles';
import { View } from '@react-pdf/renderer';
import React from 'react';

export const Block: React.FC = ({ children }) => {
  const s = useCreateStyles(() => ({
    block: {
      marginBottom: 10,
    },
  }));
  return <View style={s.block}>{children}</View>;
};
