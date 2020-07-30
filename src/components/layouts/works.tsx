import * as React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { SectionTitle } from '../utils/section-title';
import { DatedTitle } from '../utils/dated-title';
import { ListItem } from '../utils/list-item';
import { ContentContainer } from '../utils/content-container';
import { Block } from '../utils/block';
import { lineToComp } from '#/utils/line-to-pdf';

const s = StyleSheet.create({
  role: {
    color: '#666',
    fontSize: 11,
    marginBottom: 4,
  },
  desc: {
    marginBottom: 4,
  },
});

export const Works: React.FC<{
  title: string;
  works: {
    team: string;
    date: string;
    role: string;
    desc: string;
    tasks: string[];
  }[];
}> = ({ title, works }) => (
  <View>
    <SectionTitle>{title}</SectionTitle>
    <ContentContainer>
      {works.map((e, i) => (
        <Block key={i}>
          <DatedTitle date={e.date}>{e.team}</DatedTitle>
          <Text style={s.role}>{e.role}</Text>
          <Text style={s.desc}>{e.desc}</Text>
          {e.tasks.map((e, i) => (
            <ListItem key={i}>{lineToComp(e)}</ListItem>
          ))}
        </Block>
      ))}
    </ContentContainer>
  </View>
);
