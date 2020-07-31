// ! parcel will cause fs.readFile undefined
// * sooooo... prebuild the data

import { ensureFileSync, writeJSONSync } from 'fs-extra';
import path from 'path';
import { parseMd } from '#/utils/md-simple-parse';

// * ----------------

const root = process.cwd();

const writeData = (data: any, file: string) => {
  ensureFileSync(file);
  writeJSONSync(file, data, { spaces: 2 });
};

// * ---------------- en

const fileEN = path.resolve(root, './resume/resume-en.md');
const outputEN = path.resolve(root, './src/data/data-en.json');

export const dataEN = {
  time: new Date().toString(),
  meta: {
    author: 'Chris Lin',
    keywords: 'resume, front-end, javascript, typescript, developer, engineer',
    subject: 'The Resume Of Chris Lin',
    title: 'Resume',
  },
  repo: {
    label: 'Other Ver',
    link: 'https://github.com/seognil/resume',
  },
  ...parseMd(fileEN),
};

writeData(dataEN, outputEN);

// * ---------------- zh

const fileZH = path.resolve(root, './resume/resume-zh.md');
const outputZH = path.resolve(root, './src/data/data-zh.json');

export const dataZH = {
  time: new Date().toString(),
  meta: {
    author: '张三',
    keywords: '简历, 前端, javascript, typescript, 开发, 工程师',
    subject: '张三的简历',
    title: '简历',
  },
  repo: {
    label: '其他版本',
    link: 'https://github.com/seognil/resume',
  },
  ...parseMd(fileZH),
};

writeData(dataZH, outputZH);
