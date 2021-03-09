import ReactPDF, { StyleSheet } from '@react-pdf/renderer';
import { createContext, useContext } from 'react';

export type CommonStyles = {
  lang?: 'zh' | 'en';
  fancy?: string;
  font?: string;
  heavy?: number;
  bold?: number;
  weight?: number;
  size?: number;
};

export const StylesContext = createContext<CommonStyles>({});

export const createCommonStyles = (s: CommonStyles = {}) => {
  s.fancy = s.fancy ?? s.font;
  s.weight = s.weight ?? 400;
  s.heavy = s.heavy ?? s.weight;
  s.bold = s.bold ?? s.weight;
  return s;
};

export type Creator = (s: CommonStyles) => ReactPDF.Styles;

export const useCommonStyles = () => useContext(StylesContext);

export const useCreateStyles = (
  creator: (s: CommonStyles) => ReactPDF.Styles,
) => StyleSheet.create(creator(useCommonStyles()));
