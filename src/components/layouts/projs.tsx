import { LineToComp } from '#/utils/line-to-pdf';
import { View } from '@react-pdf/renderer';
import React from 'react';
import { Block } from '../utils/block';
import { ContentContainer } from '../utils/content-container';
import { DatedTitle } from '../utils/dated-title';
import { ListItem } from '../utils/list-item';
import { SectionTitle } from '../utils/section-title';

export const Projs: React.FC<{
  title: string;
  projs: {
    proj: string;
    date?: string;
    tasks: string[];
  }[];
}> = ({ title, projs }) => (
  <View>
    <SectionTitle>{title}</SectionTitle>

    <ContentContainer>
      {projs.map((e, i) => (
        <Block key={i}>
          <DatedTitle date={e.date}>{e.proj}</DatedTitle>

          {e.tasks.map((e, i) => (
            <ListItem key={i}>
              <LineToComp str={e} key={i} />
            </ListItem>
          ))}
        </Block>
      ))}
    </ContentContainer>
  </View>
);
