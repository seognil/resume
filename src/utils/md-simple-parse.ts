import fs from 'fs';

// * just for my resume, brute code, nothing fancy
// * ------------------------------------------------

// * ---------------- util

const antiHH = (s: string) => s.replace(/#+/, '').trim();
const antiBB = (s: string) => s.replace(/\*\*/g, '').trim();
const antiList = (list: string[]) =>
  list.map((e) => e.replace(/^-/, '').trim());

// ! not working in ts-node somehow, sooooo...
// /(?<=\n)(?=##\b)/

const spliter = (pattern: RegExp | string) => (s: string) =>
  s
    .split(pattern)
    .filter((e) => e)
    .map((e) => e.trim().replace(/^\n+/, '').replace(/\n+$/, ''));

const splitH2 = spliter('<!-- h2 -->');
const splitH3 = spliter('<!-- h3 -->');

const splitFistLine = (s: string) => [
  s.slice(0, s.indexOf('\n')),
  s.slice(s.indexOf('\n') + 1),
];

const splitDatedHead = (s: string) => {
  const [title, date] = antiHH(s).split(/(?=[（(])/);
  return [title.trim(), date?.replace(/[（(]/, '').replace(/[)）]/, '')];
};

// * ---------------- header

const parseHeader = (s: string) => {
  const [l1, l2, ...list] = s.split('\n');
  const name = antiHH(l1);
  const role = antiBB(l2);
  const contacts = antiList(list);
  return { name, role, contacts };
};

// * ---------------- edu

const parseEdu = (s: string) => {
  const [l1, l2, l3, l4] = s.split('\n');
  const title = antiHH(l1);
  const degree = antiBB(l2);
  const college = l3;
  const [city, date] = l4.split('--').map((e) => e.trim());
  return { title, degree, college, city, date };
};

// * ---------------- skills

const parseSkills = (s: string) => {
  const [l1, ...list] = s.split('\n');
  const title = antiHH(l1);
  const skills = list
    .map((e) => e.split(/[:：]\s?/))
    .map(([label, list]) => ({ label: label.replace('- ', ''), list }));

  return { title, skills };
};

// * ---------------- works

const parseSingleWork = (s: string) => {
  const [l1, role, desc, ...list] = s.split('\n');
  const [team, date] = splitDatedHead(l1);
  const tasks = antiList(list);
  return { team, date, role, desc, tasks };
};

const parseWorks = (s: string) => {
  const [l1, list] = splitFistLine(s);
  const title = antiHH(l1);
  const works = splitH3(list).map((e) => parseSingleWork(e));
  return { title, works };
};

// * ---------------- projects

const parseSingleProj = (s: string) => {
  const [l1, ...list] = s.split('\n');
  const [proj, date] = splitDatedHead(l1);
  const tasks = antiList(list).map((e) => e.replace(/([，。])/g, '$1 '));
  return { proj, date, tasks };
};

const parseProjs = (s: string) => {
  const [l1, list] = splitFistLine(s);
  const title = antiHH(l1);
  const projs = splitH3(list).map((e) => parseSingleProj(e));
  return { title, projs };
};

// * ---------------- everything

export const parseMd = (file: string) => {
  const content = fs
    .readFileSync(file, 'utf-8')
    .replace(/\n+/g, '\n')
    .replace(/\s+\n/g, '\n');

  const blocks = splitH2(content);

  const [blockHeader, blockEdu, blockSkills, blockWorks, blockProjs] = blocks;

  const result = {
    header: parseHeader(blockHeader),
    edu: parseEdu(blockEdu),
    skills: parseSkills(blockSkills),
    works: parseWorks(blockWorks),
    projs: parseProjs(blockProjs),
  };

  return result;
};
