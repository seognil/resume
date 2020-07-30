import * as React from 'react';
import { Layout } from './layout';
import { Header } from './header';
import data from '#/data/data-en.json';

export const OnePageResumeEn: React.FC = () => (
  <Layout meta={data.meta}>
    <Header {...data.header} />
  </Layout>
);
