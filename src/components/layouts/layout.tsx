import React from 'react';
import { Document, Page, View, StyleSheet, Text } from '@react-pdf/renderer';
import { MyState, useMyState } from '#/utils/make-store';

const createStyle = (s: MyState) =>
  StyleSheet.create({
    page: {
      padding: 40,
      paddingBottom: 50,
      fontFamily: s.font,
      fontSize: s.size! + 1,
      lineHeight: 1.5,
      fontWeight: s.weight,
    },
    footer: {
      position: 'absolute',
      bottom: 30,
      left: 30,
      right: 30,
      fontSize: s.size! - 1,
      textAlign: 'center',
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
        <Text
          style={s.footer}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};
