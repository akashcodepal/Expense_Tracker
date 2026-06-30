import { TextProps } from 'react-native';

export interface AppTextProps extends TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'bodySmall' | 'caption';
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold';
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'inverseText';
  align?: 'left' | 'center' | 'right';
}
