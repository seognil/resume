import { Font } from '@react-pdf/renderer';

import * as FontExport from './fontlist-for-export';
type FontFileList = typeof FontExport;

export const runFontRegister = (fontlist: FontFileList) => {
  const {
    MartelExtra,
    MartelLight,
    MartelRegular,
    MartelSemiBold,
    MartelBold,
    MartelExtraBold,
    MartelBlack,

    OpenSansLight,
    OpenSansLightitalic,
    OpenSansRegular,
    OpenSansRegularitalic,
    OpenSansSemiBold,
    OpenSansSemiBolditalic,
    OpenSansBold,
    OpenSansBolditalic,
    OpenSansExtraBold,
    OpenSansExtraBolditalic,
  } = fontlist;

  Font.register({
    family: 'Martel',
    fonts: [
      { src: MartelExtra, fontWeight: 200 },
      { src: MartelLight, fontWeight: 300 },
      { src: MartelRegular, fontWeight: 400 },
      { src: MartelSemiBold, fontWeight: 600 },
      { src: MartelBold, fontWeight: 700 },
      { src: MartelExtraBold, fontWeight: 800 },
      { src: MartelBlack, fontWeight: 900 },
    ],
  });

  Font.register({
    family: 'Open Sans',
    fonts: [
      { src: OpenSansLight, fontWeight: 300, fontStyle: 'normal' },
      { src: OpenSansLightitalic, fontWeight: 300, fontStyle: 'italic' },
      { src: OpenSansRegular, fontWeight: 400, fontStyle: 'normal' },
      { src: OpenSansRegularitalic, fontWeight: 400, fontStyle: 'italic' },
      { src: OpenSansSemiBold, fontWeight: 600, fontStyle: 'normal' },
      { src: OpenSansSemiBolditalic, fontWeight: 600, fontStyle: 'italic' },
      { src: OpenSansBold, fontWeight: 700, fontStyle: 'normal' },
      { src: OpenSansBolditalic, fontWeight: 700, fontStyle: 'italic' },
      { src: OpenSansExtraBold, fontWeight: 800, fontStyle: 'normal' },
      { src: OpenSansExtraBolditalic, fontWeight: 800, fontStyle: 'italic' },
    ],
  });
};
