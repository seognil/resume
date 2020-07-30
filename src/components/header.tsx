import * as React from 'react';
import { View, Text, Link } from '@react-pdf/renderer';

export const Header: React.FC<{
  name: string;
  role: string;
  contacts: (string | { link: string })[];
}> = ({ name, role, contacts }) => (
  <View>
    <View>
      <Text>{name}</Text>
      <Text>{role}</Text>
    </View>
    <View>
      {contacts.map((e) =>
        typeof e === 'string' ? (
          <Text>{e}</Text>
        ) : (
          <Link src={e.link}>{e.link}</Link>
        ),
      )}
    </View>
  </View>
);
