import * as React from 'react';
import { Document, Page } from '@react-pdf/renderer';

export const Layout: React.FC<{
  meta: {
    author: string;
    keywords: string;
    subject: string;
    title: string;
  };
}> = ({ children, meta }) => (
  <Document {...meta}>
    <Page size="A4">{children}</Page>
  </Document>
);
