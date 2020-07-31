import * as React from 'react';
import data from '#/data/data-en.json';

import { Layout } from './layouts/layout';
import { Header } from './layouts/header';
import { Skills } from './layouts/skills';
import { Edu } from './layouts/edu';
import { Works } from './layouts/works';
import { Projs } from './layouts/projs';

import { Provider } from 'react-redux';
import { createMyStore } from '#/utils/make-store';

export const OnePageResumeEn: React.FC = () => (
  <Provider
    store={createMyStore({
      font: 'Open Sans',
      fancy: 'Martel',
      weight: 300,
      bold: 600,
      heavy: 800,
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
