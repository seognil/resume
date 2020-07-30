import * as React from 'react';
import data from '#/data/data-en.json';
import { Layout } from './layouts/layout';
import { Header } from './layouts/header';
import { Skills } from './layouts/skills';
import { Edu } from './layouts/edu';
import { Works } from './layouts/works';
import { Projs } from './layouts/projs';

export const OnePageResumeEn: React.FC = () => (
  <Layout meta={data.meta}>
    <Header {...data.header} repo={data.repo}/>
    <Edu {...data.edu} />
    <Skills {...data.skills} />
    <Works {...data.works} />
    <Projs {...data.projs} />
  </Layout>
);
