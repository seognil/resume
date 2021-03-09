import { useCreateStyles } from '#/utils/common-styles';
import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import { ContentContainer } from '../utils/content-container';
import { SectionTitle } from '../utils/section-title';

export const Skills: React.FC<{
  title: string;
  skills: { label: string; list: string }[];
}> = ({ title, skills }) => {
  const s = useCreateStyles((s) => ({
    line: {
      fontSize: s.size,
    },
    label: {
      fontWeight: s.bold,
    },
  }));

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
