import { TextStyle } from 'react-native';

export interface ColorPalette {
  primary: string;
  secondary: string;
  danger: string;
  success: string;

  background: string;
  surface: string;

  textPrimary: string;
  textSecondary: string;
  inverseText: string;

  border: string;
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
export interface BorderRadius {
  xs: number;
  sm: number;
  md: number;
  full: number;
}

export interface States {
  disabledOpacity: number;
  pressedOpacity: number;
}

export interface Shadow {
  shadowColor: string;
  shadowOpacity: number;
  shadowRadius: number;
  shadowOffset: {
    width: number;
    height: number;
  };
  elevation: number;
}

export interface Shadows {
  sm: Shadow;
  md: Shadow;
  lg: Shadow;
}

export interface Theme {
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  fontWeight: FontWeight;
  borderRadius: BorderRadius;
  states: States;
}
