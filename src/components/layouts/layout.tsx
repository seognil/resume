import * as React from 'react';
import { Document, Page, View } from '@react-pdf/renderer';

export const Layout: React.FC<{
  meta: {
    author: string;
    keywords: string;
    subject: string;
    title: string;
  };
}> = ({ children, meta }) => (
  <Document {...meta}>
    <Page
      size="A4"
      style={{
        padding: 40,
        paddingBottom: 50,
        fontFamily: 'Open Sans',
        fontSize: 11,
        lineHeight: 1.5,
        fontWeight: 300,
      }}
    >
      <View>{children}</View>
    </Page>
  </Document>
);
