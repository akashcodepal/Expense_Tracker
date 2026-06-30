import { PressableProps, StyleProp, TextStyle } from 'react-native';

interface AppButtonProps extends PressableProps {
  label: string; // label of the button
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'; // styling of the button
  size?: 'small' | 'medium' | 'large'; // represent the size of button

  loading?: boolean; // shows loader inside the button
  loadingColor?: string;

  rightIcon?: React.ReactNode; // right Icon
  leftIcon?: React.ReactNode; // left Icon

  fullWidth?: boolean;

  // style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>; // label styling

  // accessibility
  accessibilityLabel?: string;

  // testing
  testId?: string;
}
