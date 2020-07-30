import * as React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { SectionTitle } from '../utils/section-title';
import { ContentContainer } from '../utils/content-container';

const s = StyleSheet.create({
  line: {
    fontSize: 10,
  },
  label: {
    fontWeight: 600,
  },
});

export const Skills: React.FC<{
  title: string;
  skills: { label: string; list: string }[];
}> = ({ title, skills }) => (
  <View>
    <SectionTitle>{title}</SectionTitle>
    <ContentContainer>
      {skills.map((e, i) => (
        <Text style={s.line} key={i}>
          <Text style={s.label}>{e.label}:&nbsp;&nbsp;</Text>
          <Text>{e.list}</Text>
        </Text>
      ))}
    </ContentContainer>
  </View>
);
