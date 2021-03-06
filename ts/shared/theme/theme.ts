import {Platform} from 'react-native';

import light from './light';
import dark from './dark';

export type Palette = {
  textColor: string;
  backgroundColor: string;
  primary: string;
  secondary: string;
};

export type Theme = {
  isIOS: Boolean;
  isRTL: Boolean;
  palette: Palette;
};

const isIOS = Platform.OS === 'ios';

export const loadTheme = (colorSchema: String, isRTL: Boolean): Theme => ({
  isIOS,
  isRTL,
  palette: colorSchema === 'light' ? light : dark,
});
