import data from '#/data/data-en.json';
import { createCommonStyles, StylesContext } from '#/utils/common-styles';
import React from 'react';
import { Edu } from './layouts/edu';
import { Header } from './layouts/header';
import { Layout } from './layouts/layout';
import { Projs } from './layouts/projs';
import { Skills } from './layouts/skills';
import { Works } from './layouts/works';

export const ResumeContentEn: React.FC = () => (
  <StylesContext.Provider
    value={createCommonStyles({
      lang: 'en',
      font: 'Open Sans',
      fancy: 'Martel',
      weight: 300,
      bold: 600,
      heavy: 800,
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
  </StylesContext.Provider>
);
