import styled from '@emotion/styled';
import { Color } from '../../theme/types';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

export const Typography = styled.p<{
  bold?: boolean;
  color?: Color;
  thin?: boolean;
  variant?: TypographyVariant;
}>(({ bold, color = 'black', theme, thin, variant = 'body2' }) => ({
  ...theme.typography[variant],
  color: theme.palette[color][500],
  fontWeight: bold
    ? theme.typography[variant].fontWeight + 100
    : thin
    ? theme.typography[variant].fontWeight - 100
    : theme.typography[variant].fontWeight,
}));
