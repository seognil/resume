import * as React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import { BluedLink } from '#/components/utils/blued-link';

const s = StyleSheet.create({
  bold: {
    fontWeight: 600,
  },
});

const Bold: React.FC = ({ children }) => <Text style={s.bold}>{children}</Text>;

const simpleParseLink = (str: string) => {
  if (/\]\(http/.test(str)) {
    return str
      .replace(/(\[.+?\]\(.+?\))/, '__@@__$1__@@__')
      .split('__@@__')
      .map((e, i) => {
        if (i % 2 === 0) return <Text key={i}>{e}</Text>;
        const [text, link] = e.slice(1, -1).split('](');
        return (
          <BluedLink src={link} key={i}>
            {text}
          </BluedLink>
        );
      });
  } else if (/\<http/.test(str)) {
    return str
      .replace(/(<.+?>)/, '__@@__$1__@@__')
      .split('__@@__')
      .map((e, i) => {
        if (i % 2 === 0) return <Text key={i}>{e}</Text>;
        const link = e.slice(1, -1);
        return (
          <BluedLink src={link} key={i}>
            {link}
          </BluedLink>
        );
      });
  } else {
    return str;
  }
};

export const lineToComp = (str: string) => {
  const slots = str.split('**').map((e, i) => {
    const Comp = i % 2 === 0 ? Text : Bold;

    return <Comp key={i}>{simpleParseLink(e)}</Comp>;
  });

  return <Text>{slots}</Text>;
};
