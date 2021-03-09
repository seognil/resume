import React from 'react';
import data from '#/data/data-zh.json';
import { Layout } from './layouts/layout';
import { Header } from './layouts/header';
import { Skills } from './layouts/skills';
import { Edu } from './layouts/edu';
import { Works } from './layouts/works';
import { Projs } from './layouts/projs';

import { Provider } from 'react-redux';
import { createMyStore } from '#/utils/make-store';

export const ResumeContentZh: React.FC = () => (
  <Provider
    store={createMyStore({
      lang: 'zh',
      font: 'Source Han Sans',
      weight: 300,
      bold: 500,
      heavy: 600,
      size: 10,
    })}
  >
    <Layout meta={data.meta}>
      <Header {...data.header} repo={data.repo} />
      <Edu {...data.edu} />
      <Skills {...data.skills} />
      <Works {...data.works} />
      <Projs {...data.projs} />
    </Layout>
  </Provider>
);
