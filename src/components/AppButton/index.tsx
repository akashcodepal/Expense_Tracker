import { AppButtonProps } from './types';
import { ActivityIndicator, Pressable, View } from 'react-native';

import { AppText } from '../AppText';

import { useTheme } from '../../theme';
import { getRippleColor, getSizeConfig, getStyles } from './styles';

export const AppButton = ({
  label,
  loading = false,
  leftIcon,
  rightIcon,
  disabled: parmDisable = false,
  fullWidth = false,
  size = 'medium',
  variant = 'primary',
  ...rest
}: AppButtonProps) => {
  const { theme } = useTheme();
  const sizeConfig = getSizeConfig(theme)[size];

  const disabled = parmDisable || loading;
  const styles = getStyles(theme, variant, size, fullWidth, disabled);

  const iconSize = sizeConfig.iconSize;
  const rippleColor = getRippleColor(theme, variant);

  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [
        styles.container,
        pressed && !disabled && styles.pressed,
      ]}
      android_ripple={{
        color: rippleColor,
      }}
      disabled={disabled}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator size="small" color={styles.text.color} />
        ) : (
          leftIcon?.(iconSize, styles.text.color)
        )}
        <AppText style={styles.text}>{label}</AppText>
        {rightIcon?.(iconSize, styles.text.color)}
      </View>
    </Pressable>
  );
};
