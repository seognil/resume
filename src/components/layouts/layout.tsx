import * as React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import { MyState, useMyState } from '#/utils/make-store';

const createStyle = (s: MyState) =>
  StyleSheet.create({
    page: {
      padding: 40,
      paddingBottom: 50,
      fontFamily: s.font,
      fontSize: 11,
      lineHeight: 1.5,
      fontWeight: s.weight,
    },
  });

export const Layout: React.FC<{
  meta: {
    author: string;
    keywords: string;
    subject: string;
    title: string;
  };
}> = ({ children, meta }) => {
  const s = createStyle(useMyState());
  return (
    <Document {...meta}>
      <Page size="A4" style={s.page}>
        <View>{children}</View>
      </Page>
    </Document>
  );
};
