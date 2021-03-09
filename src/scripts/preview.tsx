import { ResumeContentEn } from '#/components/index-en';
import { ResumeContentZh } from '#/components/index-zh';
import { runFontRegister } from '#/fonts/font-register';
import * as fontlist from '#/fonts/fontlist-for-preivew';
import { PDFViewer } from '@react-pdf/renderer';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';

// * ---------------- font

// @ts-ignore
runFontRegister(fontlist);

// * ---------------- render

let WhichContent;

[ResumeContentZh, ResumeContentEn];

WhichContent = ResumeContentZh;
// WhichContent = ResumeContentEn;

ReactDOM.render(
  <PDFViewer width="100%" height="100%">
    <WhichContent />
  </PDFViewer>,
  document.querySelector('#app'),
);
