import { useCommonStyles } from '#/utils/common-styles';
import { Text } from '@react-pdf/renderer';
import React from 'react';

export const ListItem: React.FC = ({ children }) => {
  const cs = useCommonStyles();

  return (
    <Text style={{ lineHeight: 1.3 }}>
      <Text style={{ fontWeight: cs.bold }}>&nbsp;&nbsp;•&nbsp;&nbsp;</Text>
      <Text style={{ fontSize: cs.size }}>{children}</Text>
    </Text>
  );
};
