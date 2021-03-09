import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { SectionTitle } from '../utils/section-title';
import { DatedTitle } from '../utils/dated-title';
import { ListItem } from '../utils/list-item';
import { ContentContainer } from '../utils/content-container';
import { Block } from '../utils/block';
import { LineToComp } from '#/utils/line-to-pdf';
import { MyState, useMyState } from '#/utils/make-store';

const createStyle = (s: MyState) =>
  StyleSheet.create({
    role: {
      color: '#999',
      fontSize: s.size! + 2,
      marginBottom: 2,
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
}> = ({ title, works }) => {
  const s = createStyle(useMyState());
  return (
    <View>
      <SectionTitle>{title}</SectionTitle>
      <ContentContainer>
        {works.map((e, i) => (
          <Block key={i}>
            <DatedTitle date={e.date}>{e.team}</DatedTitle>
            <Text style={s.role}>{e.role}</Text>
            <Text style={s.desc}>{e.desc}</Text>
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
};
