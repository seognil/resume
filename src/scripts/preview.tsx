import * as React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { OnePageResumeEn } from '#/components/index-en';
import { OnePageResumeZh } from '#/components/index-zh';

import * as fontlist from '#/fonts/fontlist-for-preivew';
import { runFontRegister } from '#/fonts/font-register';

// * ---------------- font

// @ts-ignore
runFontRegister(fontlist);

// * ---------------- render

ReactDOM.render(
  <PDFViewer width="100%" height="100%">
    <OnePageResumeZh />
  </PDFViewer>,
  document.querySelector('#app'),
);
