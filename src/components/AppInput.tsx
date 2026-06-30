import { StyleProp, TextInputProps, TextStyle } from 'react-native';

// value, multiline,
interface AppInputProps extends TextInputProps {
  inputType: 'text' | 'password';

  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode; // helperText to support normal text.
  error?: string;

  renderLeftIcon?: () => React.ReactNode;
  renderRightIcon?: () => React.ReactNode;

  showPasswordToggle?: boolean; // conditionally control the password right icon.

  textStyle?: StyleProp<TextStyle>;

  variant?: 'outlined' | 'filled' | 'underlined'; // styling of the textInput
  size?: 'small' | 'medium' | 'large'; // represent the size of Input
  fullWidth?: boolean;

  // accessibility
  accessibilityLabel?: string;

  // testing
  testId?: string;
}

// disabled and onChange will be handled by TextInput Props
