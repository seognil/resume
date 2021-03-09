import { useCreateStyles } from '#/utils/common-styles';
import { View } from '@react-pdf/renderer';
import React from 'react';

export const ContentContainer: React.FC = ({ children }) => {
  const s = useCreateStyles(() => ({
    container: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  }));

  return <View style={s.container}>{children}</View>;
};
