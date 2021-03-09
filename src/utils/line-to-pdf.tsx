import { BluedLink } from '#/components/utils/blued-link';
import { Text } from '@react-pdf/renderer';
import React from 'react';
import { useCommonStyles } from './common-styles';

const Bold: React.FC = ({ children }) => {
  const cs = useCommonStyles();
  return <Text style={{ fontWeight: cs.bold }}>{children}</Text>;
};

const simpleParseLink = (str: string) => {
  if (/\]\(/.test(str)) {
    return str
      .replace(/(\[.+?\]\(.+?\))/g, '__@@__$1__@@__')
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
      .replace(/(<.+?>)/g, '__@@__$1__@@__')
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

export const LineToComp: React.FC<{ str: string }> = ({ str }) => {
  const slots = str.split('**').map((e, i) => {
    const Comp = i % 2 === 0 ? Text : Bold;
    return <Comp key={i}>{simpleParseLink(e)}</Comp>;
  });

  return <Text>{slots}</Text>;
};
