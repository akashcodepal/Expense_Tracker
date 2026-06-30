import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import { AppTextProps } from './types';

type Variant = NonNullable<AppTextProps['variant']>;
type Weight = NonNullable<AppTextProps['weight']>;
type Color = NonNullable<AppTextProps['color']>;

export const getStyles = (
  theme: Theme,
  variant: Variant,
  weight: Weight,
  color: Color,
  align: AppTextProps['align'],
) => {
  return StyleSheet.create({
    text: {
      ...theme.typography[variant],
      fontWeight: theme.fontWeight[weight],
      color: theme.colors[color],
      textAlign: align,
    },
  });
};
