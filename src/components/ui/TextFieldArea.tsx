import styled from '@emotion/styled';
import { Color } from '../../theme/types';
import { FocusEvent } from 'react';

interface TextAreaProps {
  color?: Color;
  id?: string;
  isError?: boolean;
  name: string;
  onBlur?: (() => void) | ((e: FocusEvent<HTMLInputElement, Element>) => void);
  onFocus?: (() => void) | ((e: FocusEvent<HTMLInputElement, Element>) => void);
  rows?: number;
  type?: 'email' | 'number' | 'password' | 'text';
}

export const TextArea = styled.textarea<TextAreaProps>(
  ({ theme, color = 'gray', isError }) => ({
    ...theme.typography.body2,
    padding: '0.5rem 1rem',
    appearance: 'none',

    color: theme.palette.gray[700],
    backgroundColor: theme.palette.gray[200],
    transition: theme.transition.colors,

    borderStyle: 'solid',
    borderColor: isError ? theme.palette.error[500] : theme.palette.gray[200],
    borderWidth: '2px',
    borderRadius: '0.375rem',

    '&:focus': {
      backgroundColor: theme.palette.white[500],
      borderColor: theme.palette[color][500],
      accentColor: theme.palette[color][500],
      outline: '2px solid transparent',
      outlineOffset: '2px',
      transition: theme.transition.colors,
      transitionDuration: '225ms',
    },
  })
);

TextArea.defaultProps = { type: 'text', rows: 5 };
