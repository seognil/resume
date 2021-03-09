import data from '#/data/data-zh.json';
import { CommonStylesContext, createCommonStyles } from '#/utils/common-styles';
import React from 'react';
import { Edu } from './layouts/edu';
import { Header } from './layouts/header';
import { Layout } from './layouts/layout';
import { Projs } from './layouts/projs';
import { Skills } from './layouts/skills';
import { Works } from './layouts/works';

export const ResumeContentZh: React.FC = () => (
  <CommonStylesContext.Provider
    value={createCommonStyles({
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
  </CommonStylesContext.Provider>
);
