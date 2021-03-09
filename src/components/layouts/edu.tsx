import { useCreateStyles } from '#/utils/common-styles';
import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import { ContentContainer } from '../utils/content-container';
import { DatedTitle } from '../utils/dated-title';
import { SectionTitle } from '../utils/section-title';

export const Edu: React.FC<{
  title: string;
  degree: string;
  college: string;
  city: string;
  date: string;
}> = ({ title, degree, college, city, date }) => {
  const s = useCreateStyles(() => ({
    line: {
      display: 'flex',
      flexDirection: 'row',
    },
    city: {
      paddingLeft: 10,
      color: '#666',
    },
  }));

  return (
    <View>
      <SectionTitle>{title}</SectionTitle>
      <ContentContainer>
        <DatedTitle date={date}>{degree}</DatedTitle>
        <View style={s.line}>
          <Text>{college}</Text>
          <Text style={s.city}>{city}</Text>
        </View>
      </ContentContainer>
    </View>
  );
};
