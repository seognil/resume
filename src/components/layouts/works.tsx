import { Creator, useCreateStyles } from '#/utils/common-styles';
import { LineToComp } from '#/utils/line-to-pdf';
import { Text, View } from '@react-pdf/renderer';
import React, { FC } from 'react';
import { Block } from '../utils/block';
import { ContentContainer } from '../utils/content-container';
import { DatedTitle } from '../utils/dated-title';
import { ListItem } from '../utils/list-item';
import { SectionTitle } from '../utils/section-title';

const creator: Creator = (s) => ({
  role: {
    color: '#999',
    fontSize: s.size! + 2,
    marginBottom: 2,
  },
  desc: {
    marginBottom: 4,
  },
});

export const Works: FC<{
  title: string;
  works: {
    team: string;
    date: string;
    role: string;
    desc: string;
    tasks: string[];
  }[];
}> = ({ title, works }) => {
  const s = useCreateStyles(creator);

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
