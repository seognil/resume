import * as React from 'react';

import path from 'path';
import ReactPDF from '@react-pdf/renderer';
import { OnePageResumeEn } from '#/components/index-en';
import { OnePageResumeZh } from '#/components/index-zh';

import * as fontlist from '#/fonts/fontlist-for-export';
import { runFontRegister } from '#/fonts/font-register';

// * ---------------- font

runFontRegister(fontlist);

// * ---------------- render en

const distEN = path.resolve(process.cwd(), './resume/resume-en.pdf');
console.log('export:', distEN);
ReactPDF.renderToFile(<OnePageResumeEn />, distEN);

// * ---------------- render zh

const distZH = path.resolve(process.cwd(), './resume/resume-zh.pdf');
console.log('export:', distZH);
ReactPDF.renderToFile(<OnePageResumeZh />, distZH);
