import { Theme } from './types';

import { darkColors, lightColors } from './color';
import { spacing } from './spacing';
import { typography } from './typography';
import { fontWeight } from './font';
import { borderRadius } from './borderRadius';
import { states } from './states';

export const lightTheme: Theme = {
  colors: lightColors,
  spacing,
  typography,
  fontWeight,
  borderRadius,
  states: states,
};

export const darkTheme: Theme = {
  colors: darkColors,
  spacing,
  typography,
  fontWeight,
  borderRadius,
  states: states,
};
