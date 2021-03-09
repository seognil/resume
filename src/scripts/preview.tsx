import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { ResumeContentEn } from '#/components/index-en';
import { ResumeContentZh } from '#/components/index-zh';

import * as fontlist from '#/fonts/fontlist-for-preivew';
import { runFontRegister } from '#/fonts/font-register';

// * ---------------- font

// @ts-ignore
runFontRegister(fontlist);

// * ---------------- render

let WhichContent;

WhichContent = ResumeContentZh;
// WhichContent = ResumeContentEn;

ReactDOM.render(
  <PDFViewer width="100%" height="100%">
    <WhichContent />
  </PDFViewer>,
  document.querySelector('#app'),
);
