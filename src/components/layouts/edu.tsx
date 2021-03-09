import { Creator, useCreateStyles } from '#/utils/common-styles';
import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import { ContentContainer } from '../utils/content-container';
import { DatedTitle } from '../utils/dated-title';
import { SectionTitle } from '../utils/section-title';

const creator: Creator = (s) => ({
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  city: {
    paddingLeft: 10,
    color: '#666',
  },
});

export const Edu: React.FC<{
  title: string;
  degree: string;
  college: string;
  city: string;
  date: string;
}> = ({ title, degree, college, city, date }) => {
  const s = useCreateStyles(creator);

  return (
    <View>
      <SectionTitle>{title}</SectionTitle>

      <ContentContainer>
        <DatedTitle date={date}>{degree}</DatedTitle>
        <View style={s.flex}>
          <Text>{college}</Text>
          <Text style={s.city}>{city}</Text>
        </View>
      </ContentContainer>
    </View>
  );
};
