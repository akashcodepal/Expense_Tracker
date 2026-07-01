import React from 'react';
import { Text } from 'react-native';

import { AppTextProps } from './types';
import { getStyles } from './styles';
import { useTheme } from '../../theme';

export const AppText = ({
  children,
  variant = 'body',
  weight = 'regular',
  color = 'primary',
  align = 'left',
  ...rest
}: AppTextProps) => {
  const { theme } = useTheme();

  const styles = getStyles(theme, variant, weight, color, align);

  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  );
};
