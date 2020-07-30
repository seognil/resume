import { Font } from '@react-pdf/renderer';

import * as FontExport from './fontlist-for-export';
type FontFileList = typeof FontExport;

export const runFontRegister = (fontlist: FontFileList) => {
  const { latoLatin100, latoLatin100italic, latoLatin400 } = fontlist;

  Font.register({
    family: 'Lato',
    fonts: [
      {
        src: latoLatin100,
        fontStyle: 'normal',
        fontWeight: 100,
      },
      {
        src: latoLatin100italic,
        fontStyle: 'italic',
        fontWeight: 100,
      },
      {
        src: latoLatin400,
        fontStyle: 'normal',
        fontWeight: 400,
      },
    ],
  });
};
