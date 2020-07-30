import * as React from 'react';

import path from 'path';
import ReactPDF from '@react-pdf/renderer';
import { OnePageResumeEn } from '#/components';

import * as fontlist from '#/fonts/fontlist-for-export';
import { runFontRegister } from '#/fonts/font-register';

// * ---------------- font

runFontRegister(fontlist);

// * ---------------- render

const dist = path.resolve(process.cwd(), './resume/resume-en.pdf');

console.log('export:', dist);

ReactPDF.renderToFile(<OnePageResumeEn />, dist);
