import { Theme } from './types';

import { darkColors, lightColors } from './color';
import { spacing } from './spacing';
import { typography } from './typography';
import { fontWeight } from './font';

export const lightTheme: Theme = {
  colors: lightColors,
  spacing,
  typography,
  fontWeight,
};

export const darkTheme: Theme = {
  colors: darkColors,
  spacing,
  typography,
  fontWeight,
};
