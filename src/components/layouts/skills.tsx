import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { SectionTitle } from '../utils/section-title';
import { ContentContainer } from '../utils/content-container';
import { MyState, useMyState } from '#/utils/make-store';

const createStyle = (s: MyState) =>
  StyleSheet.create({
    line: {
      fontSize: s.size,
    },
    label: {
      fontWeight: s.bold,
    },
  });

export const Skills: React.FC<{
  title: string;
  skills: { label: string; list: string }[];
}> = ({ title, skills }) => {
  const s = createStyle(useMyState());
  return (
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
};
