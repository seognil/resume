import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { DemoComp } from '../components';

import * as fontlist from '../fonts/fontlist-for-preivew';
import { runFontRegister } from '../fonts/font-register';

// * ---------------- font

// @ts-ignore
runFontRegister(fontlist);

// * ---------------- render

ReactDOM.render(
  <PDFViewer width="100%" height="100%">
    <DemoComp />
  </PDFViewer>,
  document.querySelector('#app'),
);
