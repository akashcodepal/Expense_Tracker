import { TextStyle } from 'react-native';

export interface ColorPalette {
  primary: string;
  secondary: string;

  background: string;
  surface: string;

  textPrimary: string;
  textSecondary: string;

  danger: string;
  success: string;

  border: string;

  inverseText: string;
}

export interface FontWeight {
  regular: TextStyle['fontWeight'];
  medium: TextStyle['fontWeight'];
  semiBold: TextStyle['fontWeight'];
  bold: TextStyle['fontWeight'];
}

export interface TypographyStyle {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

export interface Typography {
  h1: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  body: TypographyStyle;
  bodySmall: TypographyStyle;
  caption: TypographyStyle;
}

export interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface Theme {
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  fontWeight: FontWeight;
}
