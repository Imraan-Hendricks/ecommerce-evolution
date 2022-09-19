import styled from '@emotion/styled';
import { Color } from '../theme/types';

interface HelperTextProps {
  color?: Color;
  isError: boolean;
  isFocused: boolean;
}

export const HelperText = styled.p<HelperTextProps>(
  ({ theme, isError, isFocused, color = 'gray' }) => ({
    ...theme.typography.body2,
    color: isFocused
      ? theme.palette[color][500]
      : isError
      ? theme.palette.error[500]
      : theme.palette.gray[500],
  })
);
