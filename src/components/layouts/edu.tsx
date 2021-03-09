import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { SectionTitle } from '../utils/section-title';
import { DatedTitle } from '../utils/dated-title';
import { ContentContainer } from '../utils/content-container';

const s = StyleSheet.create({
  line: {
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
}> = ({ title, degree, college, city, date }) => (
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
