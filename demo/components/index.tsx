import React, { FC } from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

export const DemoComp: FC = () => (
  <Document author="" keywords="" subject="" title="">
    <Page size="A4">
      <Text
        style={{
          fontFamily: 'Lato',
          fontStyle: 'italic',
          fontWeight: 100,
          fontSize: 100,
        }}
      >
        Hello World
      </Text>
    </Page>
  </Document>
);
