import { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface AppButtonProps
  extends Omit<PressableProps, 'style' | 'children'> {
  label: string; // label of the button
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'; // styling of the button
  size?: 'small' | 'medium' | 'large'; // represent the size of button

  loading?: boolean; // shows loader inside the button

  leftIcon?: (size: number, color: string) => React.ReactNode;
  rightIcon?: (size: number, color: string) => React.ReactNode;

  fullWidth?: boolean;

  // accessibility
  accessibilityLabel?: string;

  // testing
  testId?: string;
}
