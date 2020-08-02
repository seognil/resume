import { createStore } from 'redux';
import { useSelector } from 'react-redux';

export type MyState = {
  lang?: 'zh' | 'en';
  fancy?: string;
  font?: string;
  heavy?: number;
  bold?: number;
  weight?: number;
  size?: number;
};

type Action = { type: string; p: MyState };

const reducer = (s: MyState = {}, a: Action): MyState => ({ ...s, ...a.p });

export const createMyStore = (s: MyState = {}) => {
  s.fancy = s.fancy ?? s.font;
  s.weight = s.weight ?? 400;
  s.heavy = s.heavy ?? s.weight;
  s.bold = s.bold ?? s.weight;
  return createStore(reducer, s);
};

export const useMyState = () => useSelector<MyState, MyState>((s) => s);
