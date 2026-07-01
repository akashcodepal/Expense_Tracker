import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import { AppButtonProps } from './types';

type Variant = NonNullable<AppButtonProps['variant']>;
type Size = NonNullable<AppButtonProps['size']>;

const getVariantConfig = (theme: Theme) => ({
  primary: {
    container: {
      backgroundColor: theme.colors.primary,
      borderWidth: 0,
    },
    text: {
      color: theme.colors.inverseText,
    },
  },

  secondary: {
    container: {
      backgroundColor: theme.colors.secondary,
      borderWidth: 0,
    },
    text: {
      color: theme.colors.inverseText,
    },
  },

  outline: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    text: {
      color: theme.colors.primary,
    },
  },

  danger: {
    container: {
      backgroundColor: theme.colors.danger,
      borderWidth: 0,
    },
    text: {
      color: theme.colors.inverseText,
    },
  },
});

export const getSizeConfig = (theme: Theme) => ({
  small: {
    container: {
      minHeight: 36,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
    },
    text: {
      ...theme.typography.bodySmall,
    },
    iconSize: 16,
  },
  medium: {
    container: {
      minHeight: 48,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
    },

    text: {
      ...theme.typography.body,
    },
    iconSize: 20,
  },
  large: {
    container: {
      minHeight: 56,
      paddingHorizontal: theme.spacing.xl,
      paddingVertical: theme.spacing.lg,
    },

    text: {
      ...theme.typography.h3,
    },
    iconSize: 24,
  },
});

export const getStyles = (
  theme: Theme,
  variant: Variant,
  size: Size,
  fullWidth: boolean,
  disabled: boolean,
) => {
  const variantConfig = getVariantConfig(theme)[variant];
  const sizeConfig = getSizeConfig(theme)[size];

  return StyleSheet.create({
    container: {
      width: fullWidth ? '100%' : undefined,
      borderRadius: theme.borderRadius.md,
      opacity: disabled ? theme.states.disabledOpacity : 1,
      ...variantConfig.container,
      ...sizeConfig.container,
    },
    pressed: {
      opacity: theme.states.pressedOpacity,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.sm,
    },
    text: {
      ...variantConfig.text,
      ...sizeConfig.text,
    },
  });
};

//
export const getRippleColor = (theme: Theme, variant: Variant) => {
  switch (variant) {
    case 'primary':
      return withOpacity(theme.colors.primary, 0.12);

    case 'secondary':
      return withOpacity(theme.colors.secondary, 0.12);

    case 'outline':
      return withOpacity(theme.colors.primary, 0.12);

    case 'danger':
      return withOpacity(theme.colors.danger, 0.12);
  }
};
