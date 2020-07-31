import * as React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { BluedLink } from '../utils/blued-link';
import { useMyState, MyState } from '#/utils/make-store';

const createStyle = (s: MyState) =>
  StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      fontFamily: s.fancy,
      fontWeight: s.heavy,
      fontSize: 24,
      lineHeight: 1,
      // * hard code
      marginTop: -4,
      marginBottom: 6,
    },
    role: {
      fontFamily: s.fancy,
      fontWeight: s.bold,
      fontSize: 16,
      lineHeight: 1,
      marginBottom: 6,
      color: '#999',
    },
    repo: {
      display: 'flex',
      flexDirection: 'row',
      fontSize: 10,
    },
    contacts: {
      alignItems: 'flex-end',
      fontSize: 8,
    },
  });

export const Header: React.FC<{
  name: string;
  role: string;
  repo: { label: string; link: string };
  contacts: (string | { link: string })[];
}> = ({ name, role, repo, contacts }) => {
  const s = createStyle(useMyState());
  return (
    <View style={s.header}>
      <View>
        <Text style={s.name}>{name}</Text>
        <Text style={s.role}>{role}</Text>
        <View style={s.repo}>
          <Text>{repo.label + ': '}</Text>
          <BluedLink src={repo.link}>{repo.link}</BluedLink>
        </View>
      </View>
      <View style={s.contacts}>
        {contacts.map((e, i) =>
          typeof e === 'string' ? (
            <Text key={i}>{e}</Text>
          ) : (
            <BluedLink src={e.link} key={i}>
              {e.link}
            </BluedLink>
          ),
        )}
      </View>
    </View>
  );
};
